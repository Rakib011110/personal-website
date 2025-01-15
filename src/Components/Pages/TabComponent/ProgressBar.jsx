export const ProgressBar = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-700 h-2 rounded">
      <div
        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);
