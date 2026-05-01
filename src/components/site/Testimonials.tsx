import { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const reviews = [
  { name: "Ravi Kumar", location: "Trincomalee", rating: 5, text: "SSGROUP completed our family home on time and within budget. The workmanship and attention to detail was outstanding." },
  { name: "Mallika Perera", location: "Sivapuri", rating: 5, text: "Excellent team — they handled our guest house construction professionally from plans to final painting. Highly recommended." },
  { name: "Anton Fernando", location: "Anpuvelipuram", rating: 5, text: "Honest pricing and skilled workers. The terrazzo flooring they did for our property looks premium and durable." },
  { name: "Selvi Rajan", location: "Trincomalee", rating: 5, text: "Free consultation was very helpful. They explained every step and delivered a beautiful renovation." },
];

export default function Testimonials() {
  const { toast } = useToast();
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: "", review: "" });
  const [activeReview, setActiveReview] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  const goPrev = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goNext = () => setActiveReview((prev) => (prev + 1) % reviews.length);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const onReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.rating || reviewForm.review.trim().length < 10) {
      toast({
        title: "Please complete your review",
        description: "Name, rating and a 10+ character review are required.",
        variant: "destructive",
      });
      return;
    }

    const reviewText = `Hi SSGROUP, I'd like to share a review.%0A%0A*Name:* ${reviewForm.name}%0A*Rating:* ${reviewForm.rating}/5%0A*Review:* ${reviewForm.review}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${reviewText}`, "_blank");
    toast({ title: "Review ready to submit", description: "We've opened WhatsApp to send your review." });
    setReviewForm({ name: "", rating: "", review: "" });
    setIsReviewOpen(false);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 gradient-section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 reveal">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Reviews & Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg">Real feedback from homeowners and businesses we've worked with.</p>
          <div className="mt-5">
            <Button variant="hero" size="lg" onClick={() => setIsReviewOpen(true)}>
              Add Review
            </Button>
          </div>
        </div>

        <div
          className="md:hidden overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeReview * 100}%)` }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="w-full shrink-0 px-1">
                <div className="bg-card border rounded-2xl p-7 shadow-card">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6">"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t">
                    <div className="h-10 w-10 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
                      {r.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-smooth"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((r, idx) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setActiveReview(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${idx === activeReview ? "w-7 bg-accent" : "w-2.5 bg-muted-foreground/35"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-smooth"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className="bg-card border rounded-2xl p-7 shadow-card hover-lift reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t">
                <div className="h-10 w-10 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-primary">Share Your Review</DialogTitle>
            <DialogDescription>
              Your feedback helps homeowners and businesses choose SSGROUP confidently.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onReviewSubmit} className="grid gap-4 pt-2">
            <div>
              <Label htmlFor="testimonial-review-name">Your Name</Label>
              <Input
                id="testimonial-review-name"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                maxLength={100}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label>Rating</Label>
              <Select value={reviewForm.rating} onValueChange={(v) => setReviewForm({ ...reviewForm, rating: v })}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 - Excellent</SelectItem>
                  <SelectItem value="4">4 - Very Good</SelectItem>
                  <SelectItem value="3">3 - Good</SelectItem>
                  <SelectItem value="2">2 - Fair</SelectItem>
                  <SelectItem value="1">1 - Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="testimonial-review-text">Review</Label>
              <Textarea
                id="testimonial-review-text"
                value={reviewForm.review}
                onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                maxLength={500}
                rows={4}
                className="mt-1.5"
              />
            </div>
            <div className="pt-1 flex justify-end">
              <Button type="submit" variant="hero">
                Submit Review
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
