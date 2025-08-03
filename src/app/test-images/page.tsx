export default function TestImages() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Image Test Page</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 1: croppedlawyers.jpg</h2>
          <img 
            src="/images/croppedlawyers.jpg" 
            alt="Test 1" 
            className="w-64 h-auto border"
            onError={(e) => console.error('Test 1 failed:', (e.target as HTMLImageElement).src)}
            onLoad={(e) => console.log('Test 1 loaded:', (e.target as HTMLImageElement).src)}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 2: aboutus.jpg</h2>
          <img 
            src="/images/aboutus.jpg" 
            alt="Test 2" 
            className="w-64 h-auto border"
            onError={(e) => console.error('Test 2 failed:', (e.target as HTMLImageElement).src)}
            onLoad={(e) => console.log('Test 2 loaded:', (e.target as HTMLImageElement).src)}
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 3: criminal.jpg</h2>
          <img 
            src="/images/criminal.jpg" 
            alt="Test 3" 
            className="w-64 h-auto border"
            onError={(e) => console.error('Test 3 failed:', (e.target as HTMLImageElement).src)}
            onLoad={(e) => console.log('Test 3 loaded:', (e.target as HTMLImageElement).src)}
          />
        </div>
      </div>
    </div>
  );
} 