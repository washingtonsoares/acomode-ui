import { Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { Flex, Spacer } from '@chakra-ui/react';

function Header() {
  return (
    <Flex as="header" py={5} pl={10} boxShadow="xl">
      <Flex gap="3" alignItems="center">
        <Image src="/assets/images/acomode-logo.svg" alt="Acomode logo" width={30} height={31} />
        <Heading as="h2" fontSize="18px">
          ACOMODE
        </Heading>
      </Flex>
    </Flex>
  );
}

export default Header;
