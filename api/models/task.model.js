import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isComplete: {
    type: Boolean,
    default: false,
    required: true
  },
  priority: {
    type: String,
    default: "Medium",
    enum: ["Low", "Medium", "High"]
  },
  tags: {
    type: [String],
    default: []
  },
  schedule: {
    date: {
      type: Date,
    },
    time: {
      type: String,
      validate: {
        validator: function(value) {
          return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value);
        },
        message: props => `${props.value} is not a valid time! Use HH:MM format.`,
      },
    }
  },
  userRef: {
    type: String,
    required: true,
  }
}, {timestamps: true});

const Task = mongoose.model('Tasks', taskSchema);

export default Task;