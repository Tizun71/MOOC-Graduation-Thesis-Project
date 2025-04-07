import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

interface RegisterRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

interface RegisterResponse {
  message: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
}

interface ErrorResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { firstName, lastName, username, email }: RegisterRequest = req.body;

  if (!firstName || !lastName || !username || !email) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  try {
    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/auth/register`,
      { firstName, lastName, username, email }
    );

    return res.status(201).json({
      message: "Registration successful",
      user: response.data,
    });
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    const errorMessage =
      axiosError.response?.data?.message || "Registration failed";
    return res
      .status(axiosError.response?.status || 500)
      .json({ message: errorMessage });
  }
}
