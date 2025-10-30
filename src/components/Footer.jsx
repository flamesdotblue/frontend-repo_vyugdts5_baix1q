export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} VibeLaunch. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <span aria-hidden>•</span>
            <a href="mailto:hello@example.com" className="hover:text-gray-900">hello@example.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
