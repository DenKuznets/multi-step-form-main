
import { steps } from '@/utils/steps';
import { redirect } from 'next/navigation';

export default function Home() {
    redirect(steps[0].url)    
}
