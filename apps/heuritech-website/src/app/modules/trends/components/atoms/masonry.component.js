import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Masonry({ images }) {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
        data-testid="moodboard-masonry"
      >
        {images.map((src) => (
          <ImageListItem key={src}>
            <img
              src={`https://images.heuritech.com/${src}?w=248&fit=crop&auto=format`}
              srcSet={`https://images.heuritech.com/${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={src}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
