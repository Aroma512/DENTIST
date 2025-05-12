import { DentalService } from '@/types/services';

interface AppointmentFormProps {
  category: string;
  services: DentalService[];
}

export default function AppointmentForm({ category, services }: AppointmentFormProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
      {/* Add your form implementation here */}
    </div>
  );
}
