// app/api/checkout/route.js
import Stripe from 'stripe';
import { supabase } from "@/lib/supabaseClient";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const origin = req.headers.get('origin');

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          price: 'price_1RPXqMFNQ4QAnOViAFILmcY4',
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({
      clientSecret: session.client_secret,
      sessionId: session.id,
    });
  } catch (err) {
    console.error('Stripe Error:', err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

 // 5. Update user brand_stage after customer pays initial 475
//  const { error: updateError } = await supabase
//  .from('users')
//  .update({ brand_stage: 5 })
//  .eq('id', userId);

// if (updateError) {
//  console.error("Error updating user stage:", updateError);
//  alert("Contract saved, but failed to update user stage.");
// }
