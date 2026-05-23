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
import { motion, AnimatePresence, useInView } from "framer-motion";

const reviews = [
  { name: "Ravi Kumar", location: "Trincomalee", rating: 5, text: "AXGROUPS completed our family home on time and within budget. The workmanship and attention to detail was outstanding." },
  { name: "Mallika Perera", location: "Sivapuri", rating: 5, text: "Excellent team — they handled our guest house construction professionally from plans to final painting. Highly recommended." },
  { name: "Anton Fernando", location: "Anpuvelipuram", rating: 5, text: "Honest pricing and skilled workers. The terrazzo flooring they did for our property looks premium and durable." },
  { name: "Selvi Rajan", location: "Trincomalee", rating: 5, text: "Free consultation was very helpful. They explained every step and delivered a beautiful renovation." },
];

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div className="bg-card border rounded-2xl p-7 shadow-card h-full">
      <Quote className="h-8 w-8 text-accent/30 mb-4" />
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: r.rating }).map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: idx * 0.07, type: "spring", stiffness: 300 }}
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          </motion.div>
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
  );
}

export default function Testimonials() {
  const { toast } = useToast();
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: "", review: "" });
  const [activeReview, setActiveReview] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
      toast({ title: "Please complete your review", description: "Name, rating and a 10+ character review are required.", variant: "destructive" });
      return;
    }
    const reviewText = `Hi AXGROUPS, I'd like to share a review.%0A%0A*Name:* ${reviewForm.name}%0A*Rating:* ${reviewForm.rating}/5%0A*Review:* ${reviewForm.review}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${reviewText}`, "_blank");
    toast({ title: "Review ready to submit", description: "We've opened WhatsApp to send your review." });
    setReviewForm({ name: "", rating: "", review: "" });
    setIsReviewOpen(false);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 gradient-section" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Reviews & Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient-section mt-3 mb-5">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg">Real feedback from homeowners and businesses we've worked with.</p>
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="hero" size="lg" onClick={() => setIsReviewOpen(true)}>
              Add Review
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile carousel */}
        <div
          className="md:hidden overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="px-1"
            >
              <ReviewCard r={reviews[activeReview]} />
            </motion.div>
          </AnimatePresence>
          <div className="mt-5 flex items-center justify-between">
            <motion.button
              type="button"
              onClick={goPrev}
              className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-smooth"
              aria-label="Previous review"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              {reviews.map((r, idx) => (
                <motion.button
                  key={r.name}
                  type="button"
                  onClick={() => setActiveReview(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  animate={{ width: idx === activeReview ? 28 : 10 }}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2.5 rounded-full transition-colors ${idx === activeReview ? "bg-accent" : "bg-muted-foreground/35"}`}
                />
              ))}
            </div>
            <motion.button
              type="button"
              onClick={goNext}
              className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-smooth"
              aria-label="Next review"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <ReviewCard r={r} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-primary">Share Your Review</DialogTitle>
            <DialogDescription>
              Your feedback helps homeowners and businesses choose AXGROUPS confidently.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onReviewSubmit} className="grid gap-4 pt-2">
            <div>
              <Label htmlFor="testimonial-review-name">Your Name</Label>
              <Input id="testimonial-review-name" value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })} maxLength={100} className="mt-1.5" />
            </div>
            <div>
              <Label>Rating</Label>
              <Select value={reviewForm.rating} onValueChange={(v) => setReviewForm({ ...reviewForm, rating: v })}>
                <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select rating" /></SelectTrigger>
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
              <Textarea id="testimonial-review-text" value={reviewForm.review} onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })} maxLength={500} rows={4} className="mt-1.5" />
            </div>
            <div className="pt-1 flex justify-end">
              <Button type="submit" variant="hero">Submit Review</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
