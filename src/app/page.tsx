import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-16 p-8 bg-component text-component-foreground">
        <div className="flex justify-end mb-4">
        </div>
      </main>
    </div>
  );
}
