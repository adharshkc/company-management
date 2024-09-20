import {Box, Skeleton} from "@mui/material"

const IssueSkeleton = () => {
  return (
    <>
    <Box
      sx={{
        paddingX: 3,
      }}
    >
      
        <Skeleton height={40}/>
    </Box>
  </>
  )
}

export default IssueSkeleton