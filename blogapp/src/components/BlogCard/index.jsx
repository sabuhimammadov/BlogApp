import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from "@chakra-ui/react";

export function BlogCard(props) {
  console.log("props", props)
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={props.cover_url}
        alt='Caffe Latte'
        me="20px"
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{props.title}</Heading>

          <Text py='2'>
            {props.desc}
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='red' onClick={props.onReadMore}>
            Read More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}