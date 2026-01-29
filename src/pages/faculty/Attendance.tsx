import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Loader2 } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const students = [
  { id: 1, name: "John Smith", rollNumber: "CSE2022001" },
  { id: 2, name: "Emily Davis", rollNumber: "CSE2022002" },
  { id: 3, name: "Michael Brown", rollNumber: "CSE2022003" },
  { id: 4, name: "Sarah Wilson", rollNumber: "CSE2022004" },
  { id: 5, name: "David Lee", rollNumber: "CSE2022005" },
  { id: 6, name: "Jessica Taylor", rollNumber: "CSE2022006" },
];

const AssignAttendance = () => {
  const [attendance, setAttendance] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = (id: number) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
  };

  return (
    <DashboardLayout userType="faculty">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Assign Attendance</h1>
          <p className="text-muted-foreground">Mark attendance for your class</p>
        </div>

        <div className="bg-card rounded-2xl p-6 border shadow-card">
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <Label>Class</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                <SelectContent><SelectItem value="cse-6a">CSE 6A</SelectItem><SelectItem value="cse-6b">CSE 6B</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Subject</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
                <SelectContent><SelectItem value="ml">Machine Learning</SelectItem><SelectItem value="cc">Cloud Computing</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select date" /></SelectTrigger>
                <SelectContent><SelectItem value="today">Jan 29, 2026</SelectItem><SelectItem value="yesterday">Jan 28, 2026</SelectItem></SelectContent>
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="text-left text-sm text-muted-foreground border-b">
                <th className="pb-3 font-medium">Roll Number</th><th className="pb-3 font-medium">Name</th><th className="pb-3 font-medium text-center">Present</th>
              </tr></thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b last:border-0">
                    <td className="py-4 font-medium">{student.rollNumber}</td>
                    <td className="py-4">{student.name}</td>
                    <td className="py-4 text-center">
                      <Switch checked={attendance[student.id] || false} onCheckedChange={() => handleToggle(student.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={handleSave} disabled={isLoading} className="btn-primary rounded-full px-8">
              {isLoading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Saving...</> : <><Save className="w-4 h-4 mr-2" />Save Attendance</>}
            </Button>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AssignAttendance;
