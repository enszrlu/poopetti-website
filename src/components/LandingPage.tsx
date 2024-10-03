'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { rainPoop, poopetti } from 'poopetti';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import CopyCode from './CopyCode';

export default function LandingPage() {
  const [emoji, setEmoji] = useState('💩');
  const [customEmoji, setCustomEmoji] = useState('');
  const [density, setDensity] = useState(50);
  const [duration, setDuration] = useState(3000);
  const [radius, setRadius] = useState(0);
  const DEFAULT_RADIUS = useRef(300);

  useEffect(() => {
    const windowWidth = window?.innerWidth || 200;
    const windowHeight = window?.innerHeight || 200;
    const defaultRadius = 0.2 * Math.max(windowWidth, windowHeight);
    setRadius(defaultRadius);
    DEFAULT_RADIUS.current = defaultRadius;
  }, []);

  const handleRainPoop = () => {
    rainPoop({
      emoji: emoji === 'custom' ? customEmoji : emoji,
      duration,
      density,
    });
  };

  const handlePoopetti = () => {
    poopetti({
      emoji: emoji === 'custom' ? customEmoji : emoji,
      duration,
      density,
      radius,
    });
  };

  return (
    <main className="container mx-auto mt-12 px-4 flex-1 h-full flex flex-col gap-10">
      <h1 className="text-5xl font-bold text-center text-orange-800">Poopetti</h1>
      <p className="text-xl text-center text-orange-700">
        A fun and lightweight library for raining emojis and creating emoji explosions!
        <br />
        Mainly focused on 💩 emoji.
      </p>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-orange-800 mb-6">Try it out!</h2>

        <section className="space-y-6">
          <div>
            <Label htmlFor="emoji-select" className="text-orange-700">
              Choose an Emoji
            </Label>
            <RadioGroup
              id="emoji-select"
              value={emoji}
              onValueChange={setEmoji}
              className="flex space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="💩" id="poop" />
                <Label htmlFor="poop">💩</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="🌟" id="star" />
                <Label htmlFor="star">🌟</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="🎉" id="party" />
                <Label htmlFor="party">🎉</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="🍕" id="pizza" />
                <Label htmlFor="pizza">🍕</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="custom" />
                <Label htmlFor="custom">Custom</Label>
              </div>
            </RadioGroup>
            {emoji === 'custom' && (
              <Input
                type="text"
                placeholder="Enter custom emoji (max 5 chars)"
                value={customEmoji}
                onChange={(e) => setCustomEmoji(e.target.value.slice(0, 5))}
                className="mt-2"
              />
            )}
          </div>

          <div>
            <Label htmlFor="density-slider" className="text-orange-700">
              Density: {density}
            </Label>
            <Slider
              id="density-slider"
              min={0}
              max={1000}
              step={1}
              value={[density]}
              onValueChange={([value]) => setDensity(value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="duration-slider" className="text-orange-700">
              Duration: {duration}ms
            </Label>
            <Slider
              id="duration-slider"
              min={0}
              max={5000}
              step={100}
              value={[duration]}
              onValueChange={([value]) => setDuration(value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="radius-slider" className="text-orange-700">
              Poopetti Radius: {Math.round(radius)}px
            </Label>
            <Slider
              id="radius-slider"
              min={100}
              max={Math.max(1000, DEFAULT_RADIUS.current * 1.2)}
              step={10}
              value={[radius]}
              onValueChange={([value]) => setRadius(value)}
              className="mt-2"
            />
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={handleRainPoop}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Rain Poop
            </Button>
            <Button
              onClick={handlePoopetti}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            >
              Pop a Poopetti
            </Button>
          </div>
        </section>
      </div>

      <section className="text-center">
        <Card className="max-w-lg mx-auto bg-orange-100 border-2 border-orange-200 shadow-lg">
          <CardContent className="p-4">
            <CopyCode />
          </CardContent>
        </Card>
      </section>

      <section className="rounded-lg flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl font-bold text-orange-800">Why Choose Poopetti? 💩</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-orange-700 font-semibold">
            Are you drowning in user incompetence? Poopetti to the Rescue! 💩🦸‍♂️
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className=" text-orange-800 italic">
              Why use boring error messages when you can literally shower your users with
              💩?
            </p>
            <p className=" text-orange-800 italic">
              <b>Poopetti</b>, because sometimes, subtle just doesn&apos;t cut it!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white shadow-md border-2 border-orange-200">
            <CardHeader>
              <div className="flex items-center">
                <img
                  src="/Winniethepoo.webp"
                  alt="Frustrated Developer"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <CardTitle className="text-orange-800">Winnie-the-Poo</CardTitle>
                  <CardDescription className="text-orange-600">
                    Senior Poop Engineer
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                "🤦‍♂️ I was tired of users who couldn't tell their mouse from their elbow.
                Poopetti helped me express my frustration in the most satisfying way
                possible!"
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border-2 border-orange-200">
            <CardHeader>
              <div className="flex items-center">
                <img
                  src="/captainpoopsparrow.jpeg"
                  alt="Annoyed Designer"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <CardTitle className="text-orange-800">Captain Poopsparrow</CardTitle>
                  <CardDescription className="text-orange-600">
                    UX/UI Pooper
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                "🙄 Sick of seeing users navigate my perfectly designed UI like they're
                wearing a blindfold? Poopetti lets me shower them with the feedback they
                deserve!"
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md border-2 border-orange-200">
            <CardHeader>
              <div className="flex items-center">
                <img
                  src="/turdobaggins.jpeg"
                  alt="Poopumentation Specialist"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <CardTitle className="text-orange-800">Turdo Baggins</CardTitle>
                  <CardDescription className="text-orange-600">
                    Poopumentation Specialist
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700">
                "😤 Frustrated by folks who fail at filling out forms faster than I can
                say 'RTFM'? Poopetti lets me express my feelings in a way that's both
                hilarious and cathartic!"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
