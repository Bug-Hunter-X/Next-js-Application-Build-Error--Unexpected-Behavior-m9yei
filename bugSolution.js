```javascript
// pages/index.js
export async function getServerSideProps() {
  //Attempt to fetch data from an external source.  Wrap this in a try...catch block
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch(error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to fetch data',
      }
    }
  }
}

export default function Home({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a Next.js app.</p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```