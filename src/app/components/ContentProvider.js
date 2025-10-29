import ContentContext from '../../context/ContentContext';

export default function ContentProvider({ content, children }) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
