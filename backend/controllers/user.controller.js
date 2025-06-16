const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUserById = async (req, res) => {
  const userId = req?.params?.userId;

  if (!userId) {
    return res.status(404).json({ error: "User not found" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// controllers/user.controller.js
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      take: 20,
    });
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
