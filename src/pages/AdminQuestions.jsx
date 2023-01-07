import { useEffect, useState } from "react";
import axios from "axios";
import { AdminLayout } from "../components";
import Comments from '../sections/Comments'
export default function AdminQuestions() {
  const [ questions, setQuestions ] = useState([])
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    axios.get('https://gamescript-backend-production.up.railway.app/questions')
    .then(response => response.data.filter(el => !el.answer))
    .then(results => setQuestions(results))
    .catch(() => setQuestions([]))
  }, [filters])


  return (
    <AdminLayout>
      <Comments list={questions} />
    </AdminLayout>
  );
}
