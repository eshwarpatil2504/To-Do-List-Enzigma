import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoTaskSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        User Assign Task's Here!
      </h2>
      <p className="text-stone-400 mb-4">
        Select Your Space or Get Started With a New One
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new User</Button>
      </p>
    </div>
  );
}