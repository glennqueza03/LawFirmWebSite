import mongoose from 'mongoose';

export interface IConsultation {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  caseType: string;
  description: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const consultationSchema = new mongoose.Schema<IConsultation>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true,
  },
  preferredDate: {
    type: String,
    required: [true, 'Preferred date is required'],
  },
  preferredTime: {
    type: String,
    required: [true, 'Preferred time is required'],
  },
  caseType: {
    type: String,
    required: [true, 'Case type is required'],
    enum: ['Immigration', 'Family Law', 'Criminal', 'Other'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', consultationSchema); 