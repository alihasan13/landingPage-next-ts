import { Student } from "@/types/student";

export const getStudentsService = async (): Promise<Student[]> => {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=6",
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch students data");
    }

    const data = await response.json();
    
    // Transform the data to match our Student interface
    return data.results.map((user: any, index: number) => ({
      id: index + 1,
      firstname: user.name.first,
      lastname: user.name.last,
      image: user.picture.large,
    }));
  } catch (error) {
    console.error("Error fetching students:", error);
    // Return fallback data
    return getFallbackStudents();
  }
};

// Fallback data in case API fails
function getFallbackStudents(): Student[] {
  return [
    {
      id: 1,
      firstname: "Sarah",
      lastname: "Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      firstname: "Michael",
      lastname: "Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      firstname: "Emma",
      lastname: "Williams",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
    },
    {
      id: 4,
      firstname: "James",
      lastname: "Brown",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
    },
    {
      id: 5,
      firstname: "Olivia",
      lastname: "Davis",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop",
    },
    {
      id: 6,
      firstname: "William",
      lastname: "Martinez",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    },
  ];
}