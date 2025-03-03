import DefaultLayout from '../../layout';
import SingleNewsContent from '../../components/SingleNewsContent';
import MoreStoriesCard from '../../components/MoreStoriesCard';

const mainArticle = {
  title: 'Apple Unveils AI-Powered iPhone at Global Event',
  tags: ['5m read', '1h ago', 'Technology', 'From TechCrunch'],
  imageUrl: 'https://placehold.co/1280x720',
  content: `
      In a groundbreaking move, Apple has unveiled its latest iPhone model, integrating
      advanced artificial intelligence (AI) capabilities to redefine the smartphone
      experience. The announcement was made at Apple's annual launch event in Cupertino,
      California, where CEO Tim Cook described the device as “the most intelligent iPhone
      we’ve ever created.”
      <br /> <br /> <span className="font-bold">Revolutionary AI Features</span> <br />
      One of the biggest highlights of the new iPhone is its AI-powered personal assistant,
      which goes beyond traditional voice commands. Apple’s upgraded Siri+ now understands and
      anticipates user needs, offering real-time suggestions, personalized notifications, and
      even drafting responses in messages and emails. The AI also enhances on-device photo and
      video editing, allowing users to remove objects, enhance backgrounds, and adjust
      lighting with a single tap.
      <br /> <br /> <span className="font-bold">Enhanced Camera & Performance</span> <br />
      Apple has significantly upgraded the camera system, equipping the new iPhone with an
      Ultra Retina AI Camera that uses machine learning to optimize shots based on lighting,
      subject movement, and composition. The Night Mode Pro ensures crisp, clear images in
      low-light conditions, while AI Cinematic Mode enables professional-quality video
      recording with dynamic focus shifts. Powered by the A18 Bionic chip, the new iPhone
      promises a 40% faster processing speed, making multitasking seamless. Apple claims the
      new processor also enhances battery efficiency, extending battery life by up to 5 hours
      compared to previous models.
      <br /> <br />
      <span className="font-bold">Privacy & Security at the Core</span> <br />
      With AI-driven advancements come concerns over data security. Apple reassured users that
      all AI processes occur on-device, ensuring data privacy without relying on cloud
      storage. The new Secure Enclave 2.0 encrypts personal data even further, reinforcing
      Apple’s commitment to user security.
      <br /> <br />
      <span className="font-bold">iOS 18 & Ecosystem Integration</span>
      <br />
      Running on iOS 18, the latest iPhone introduces a host of new features, including a
      redesigned Control Center, customizable widgets, and dynamic lock screen themes. It also
      integrates deeply with Apple’s ecosystem, allowing seamless connectivity between iPhone,
      iPad, and Mac, with AI-powered handoff and continuity features that make switching
      between devices effortless.
      <br /> <br />
      <span className="font-bold">Availability & Pricing</span> <br />
      The new AI-powered iPhone will be available for pre-order starting this Friday, with
      official sales beginning next week. Prices start at $999 for the base model, with Pro
      and Ultra variants offering additional premium features. Conclusion With this launch,
      Apple is setting a new benchmark for smartphones, making AI a central part of daily
      mobile interactions. As competitors rush to catch up, it remains to be seen how the
      industry will respond to Apple’s latest innovation.
    `,
};

const moreStories = Array.from({ length: 3 }).map(() => ({
  imageUrl: 'https://placehold.co/1700x1540',
  title: 'Tesla’s Stock Surges 12% After Record Sales Announcement',
  description:
    'Apple has announced its latest iPhone model featuring AI-powered tools and a revamped camera system to enhance user experience.',
  tags: ['Technology', 'From TechCrunch'],
  link: '/article/123',
}));

const SingleNewsPage = () => {
  return (
    <DefaultLayout>
      <SingleNewsContent {...mainArticle} />

      <div>
        <div className="mb-6">
          <h2 className="font-inter text-xl font-bold lg:text-2xl">More Stories</h2>
        </div>

        <div className="mb-10 grid gap-20 lg:grid-cols-3">
          {moreStories.map((story, index) => (
            <MoreStoriesCard key={index} {...story} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SingleNewsPage;
