import { useState } from 'react';
import { Card } from '../ui/Card';
import { Text, Heading, Stack, useColorModeValue, Button } from '@chakra-ui/react';
import { HistoryItem } from '../../types/history';
import { formatDate } from '../../utils/formatDate';
import { truncateText } from '../../utils/truncateText';

interface Props {
  item: HistoryItem;
}

export const HistoryCard = ({ item }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const maxLength = 200;

  const isTruncable = item.answer.length > maxLength;
  const displayText = isExpanded ? item.answer : truncateText(item.answer, maxLength);

  return (
    <Card variant="filled">
      <Stack spacing={3}>
        <Heading as="h4" size="md">
          ❓ {item.question}
        </Heading>
        <Text color={textColor}>
          💡 {displayText}
        </Text>
        {isTruncable && (
          <Button onClick={toggleExpand} size="sm" variant="ghost" alignSelf="start">
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </Button>
        )}
        <Text fontSize="sm" color="gray.500">
          {formatDate(item.createdAt)}
        </Text>
      </Stack>
    </Card>
  );
};