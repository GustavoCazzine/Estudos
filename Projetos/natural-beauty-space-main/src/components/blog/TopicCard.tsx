
import { Link } from 'react-router-dom';

interface TopicCardProps {
  title: string;
  count: string;
  icon: string;
  color: string;
}

const TopicCard = ({ title, count, icon, color }: TopicCardProps) => (
  <Link to={`/blog/topic/${title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
    <div className={`${color} p-5 rounded-xl transition-all hover:shadow-md hover:-translate-y-1 text-center`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-medium text-salon-dark-text mb-1">{title}</h3>
      <p className="text-sm text-salon-light-text">{count}</p>
    </div>
  </Link>
);

export default TopicCard;
