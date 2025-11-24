import ContactForm from '../../components/ui/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Rajput Real Estate
            </h1>
            <p className="text-gray-600">
              Get in touch with us for all your property needs in Faisalabad
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
}