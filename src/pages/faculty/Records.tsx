import { motion } from "framer-motion";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const records = [
  { date: "Jan 30, 2026", class: "CSE 6A", subject: "Machine Learning", present: 30, absent: 0, percentage: 100 },
  { date: "Jan 29, 2026", class: "CSE 6A", subject: "Machine Learning", present: 28, absent: 2, percentage: 93 },
  { date: "Jan 28, 2026", class: "CSE 6A", subject: "Machine Learning", present: 27, absent: 3, percentage: 90 },
  { date: "Jan 27, 2026", class: "CSE 6B", subject: "Cloud Computing", present: 30, absent: 0, percentage: 100 },
  { date: "Jan 26, 2026", class: "CSE 6A", subject: "Machine Learning", present: 26, absent: 4, percentage: 87 },
];

const AttendanceRecords = () => {
  return (
    <DashboardLayout userType="faculty">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
        <div><h1 className="text-2xl font-bold">Attendance Records</h1><p className="text-muted-foreground">View past attendance records</p></div>
        <div className="bg-card rounded-2xl p-6 border shadow-card overflow-x-auto">
          <table className="w-full">
            <thead><tr className="text-left text-sm text-muted-foreground border-b">
              <th className="pb-3 font-medium">Date</th><th className="pb-3 font-medium">Class</th><th className="pb-3 font-medium">Subject</th><th className="pb-3 font-medium">Present</th><th className="pb-3 font-medium">Absent</th><th className="pb-3 font-medium">%</th>
            </tr></thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-4">{r.date}</td><td className="py-4">{r.class}</td><td className="py-4">{r.subject}</td>
                  <td className="py-4 text-green-600">{r.present}</td><td className="py-4 text-red-500">{r.absent}</td>
                  <td className="py-4"><span className={`px-2 py-1 rounded text-xs font-medium ${r.percentage >= 90 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{r.percentage}%</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AttendanceRecords;
