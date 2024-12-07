import { expect, test } from 'vitest';
import { buildQueryFindMany } from './cosmos-db.service';

type User = {
  firstName: string;
  lastName: string;
  createdAt: Date;
  isSuperAdmin: boolean;
};

const query = buildQueryFindMany<User>({
  where: {
    isSuperAdmin: {
      equals: true,
    },
    createdAt: {
      gte: new Date(),
    },
    firstName: {
      contains: 'haha',
      mode: 'INSENSITIVE',
    },
    lastName: {
      equals: 'hehe',
    },
  },
  select: {
    firstName: true,
  },
  orderBy: {
    lastName: 'ASC',
  },
});

test('pass', () => {
  console.log(`query => ${query}`);
  expect(true).toEqual(true);
});
