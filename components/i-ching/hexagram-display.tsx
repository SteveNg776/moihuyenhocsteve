import { Hexagram } from '@/lib/i-ching-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface HexagramDisplayProps {
  lines: number[];
  hexagram: Hexagram | null;
  changingHexagram?: Hexagram | null;
  changedLines?: number[];
}

// Helper components for rendering lines (SolidLine, BrokenLine, etc.)
const Line = ({ isChanging }: { isChanging: boolean }) => (
  <div className={`h-1 w-full ${isChanging ? 'bg-red-500' : 'bg-foreground'}`} />
);

const ChangingLine = () => (
  <div className="relative h-1 w-full bg-foreground">
    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-red-500 bg-background" />
  </div>
);

const SolidLine = ({ isChanging }: { isChanging: boolean }) => (
  <div className="p-1">
    {isChanging ? <ChangingLine /> : <Line isChanging={false} />}
  </div>
);

const BrokenLine = ({ isChanging }: { isChanging: boolean }) => (
  <div className="flex items-center justify-center gap-4 p-1">
    <div className={`h-1 w-2/5 ${isChanging ? 'bg-red-500' : 'bg-foreground'}`} />
    <div className={`h-1 w-2/5 ${isChanging ? 'bg-red-500' : 'bg-foreground'}`} />
  </div>
);

const renderLine = (lineValue: number, isChanging: boolean) => {
  const isYang = lineValue % 2 !== 0; // 7, 9 are Yang
  const isChangingLine = lineValue === 6 || lineValue === 9;
  if (isYang) {
    return <SolidLine isChanging={isChanging && isChangingLine} />;
  }
  return <BrokenLine isChanging={isChanging && isChangingLine} />;
};


export const HexagramDisplay = ({
  lines,
  hexagram,
  changingHexagram,
  changedLines = [],
}: HexagramDisplayProps) => {
  if (!hexagram) {
    return null;
  }

  return (
    <Card className="w-full overflow-hidden rounded-2xl bg-card shadow-lg border">
      <CardHeader className="bg-muted/30 p-4 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-2xl font-bold text-primary">
              {`Quẻ ${hexagram.name} (${hexagram.description})`}
            </CardTitle>
            <p className="text-md text-muted-foreground mt-1">
              {/* This is a more descriptive title */}
              {hexagram.description.includes('trên') ? hexagram.description : `${hexagram.description} trên ${hexagram.description} dưới`}
            </p>
          </div>
          <Badge variant="secondary" className="text-lg font-semibold shrink-0">
            {hexagram.id}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-muted/30 p-4">
              <div className="font-semibold text-center">Quẻ Gốc</div>
              <div className="w-24 space-y-2">
                {lines.slice().reverse().map((line, index) => (
                  <div key={index}>
                    {renderLine(line, changedLines.includes(5 - index))}
                  </div>
                ))}
              </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted/30 p-4">
                <h3 className="font-semibold text-lg text-muted-foreground">Lời Quẻ</h3>
                <p className="mt-2 whitespace-pre-wrap text-card-foreground">{hexagram.meaning}</p>
              </div>

              <div className="rounded-lg bg-muted/30 p-4">
                <h3 className="font-semibold text-lg text-muted-foreground">Dịch Nghĩa</h3>
                <p className="mt-2 whitespace-pre-wrap text-card-foreground">{hexagram.details}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
