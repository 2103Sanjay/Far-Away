export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    );
  const totalItem = item.length;
  const packedItems = item.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️ "
          : `You have ${totalItem} items on your list, and you alrady packed
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
