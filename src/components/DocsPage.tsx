'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CodeBlock from '@/components/CodeBlock';

const DocsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="container mx-auto py-12 max-w-screen-2xl flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold mb-2" id="getting-started">
            Getting Started with Poopetti
          </CardTitle>
          <CardDescription className="text-lg">
            Learn how to Poop in your project.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col gap-6">
          <motion.div {...fadeIn} className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Installation</h2>
              <CodeBlock
                language="bash"
                code={`npm install poopetti
# or
yarn add poopetti
# or
pnpm add poopetti
# or
bun add poopetti`}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Usage</h2>
              <CodeBlock
                language="javascript"
                code={`import { rainPoop, poopetti } from 'poopetti';

// Make it rain poop
rainPoop();

// Make it rain poop in your style!
rainPoop({
  emoji: '💩',
  duration: 5000,
  density: 100,
});

// Make it rain poop in your style!
rainPoop({
  emoji: ['💩', '😃', '😂', '😍', '😡', '😴', '😷', '😵', '😳', '😱'],
  duration: 10000,
  density: 500,
});

// Burst some poop!
poopetti();

// Burst some poop in your style!
poopetti({
  emoji: '💩',
  duration: 3000,
  density: 50,
radius: 200,
});`}
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">rainPoop Options</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Option</TableHead>
                    <TableHead className="w-[200px]">Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>emoji</TableCell>
                    <TableCell>string or string[]</TableCell>
                    <TableCell>
                      The emoji to rain (default: 💩) or an array of emojis to rain
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>duration</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>
                      Duration of the poop rain in milliseconds (default: 5000)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>density</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>How much poop to rain (default: 50)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">poopetti Options</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Option</TableHead>
                    <TableHead className="w-[200px]">Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>emoji</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>The emoji to burst (default: 💩)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>duration</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>
                      Duration of the poop explosion in milliseconds (default: 1500)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>density</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>How explosive the poop should be (default: 50)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>radius</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>
                      The radius of the poop explosion (default: auto)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsPage;
