import Link from 'next/link';
import type { NavItem } from '@/lib/appConfig';

export default function NavLink({ label, link }: NavItem) {
  return <Link href={link}>{label}</Link>;
}
