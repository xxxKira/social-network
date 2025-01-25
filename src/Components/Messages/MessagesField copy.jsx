import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function MessagesContainer() {
  const { userId } = useParams();

  useEffect(() => {}, [userId]);
}
