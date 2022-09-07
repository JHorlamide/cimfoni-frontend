import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import LysiLogo from "../../assets/images/LysiLogo.png";
import Footer from "../../components/Footer/Footer";

const Glossary = () => {
  return (
    <section>
      <Navbar />

      <section className='bg-backgroundColor px-10 py-10 md:px-20 md:py-16 lg:px-28 lg:py-32'>
        <div
          className='flex 
          flex-col 
          justify-center 
          items-center 
          space-y-9 
          md:flex-row 
          lg:flex-row 
          md:space-x-20 
          lg:space-x-14 
          md:space-y-0
          lg:space-y-0
          md:justify-start
          md:items-start'
        >
          <div className='space-y-5 md:space-y-5'>
            <h1 className='text-3xl font-semibold'>
              Glossary of design <br className='hidden md:block lg:block' />&
              broadcast terms
            </h1>
            <p className='text-lg'>Terms and Definations.</p>
          </div>

          {/* <img className='w-20 h-20' src={LysiLogo} alt='Lysi Logo' /> */}
        </div>

        <hr className='mt-10 border divide-y divide-dashed' />

        <div className='flex flex-col space-y-4 pt-5 md:space-y-10'>
          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Aspect ratio</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This describes the shape of an image. 1:1 is square. Most video is
              16:9. Regardless of the size of the screen or the resolution of an
              image, the frame will have a particular aspect ratio. Sequences
              have an aspect ratio, and so do pixels. Most pixels are square,
              but there are several video formats that use non-square pixels.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Clip</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is a link to a media file (which might be video, a graphic,
              audio, or any other kind of media). Clips look and behave as if
              they were the media file they link to, and display information
              that relates to the media file, such as image size and frame rate
              (fps).
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Codec</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is short for coder/decoder. This is a way of storing digital
              information (like video and audio) and often allows the data to be
              stored in a more compact form than the original. Like shorthand
              writing, this takes less space but requires more effort to write
              and, later, to read. Most video is recorded using a codec to
              reduce the file size, with the exception of camera systems that
              record data as raw media with no processing.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Compression</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This word has two different meanings: First, it’s a reduction in
              the size of video and audio files by storing the information using
              a codec (coder/decoder). Second, it’s a reduction in the
              difference between the loudest and quietest parts of sound. This
              allows the overall sound level to seem louder.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Cut</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              In a sequence, a cut is the moment one clip ends and another
              begins. The term comes from celluloid film editing, where the film
              is literally cut. A cut is technically a form of transition and is
              the most common kind.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Effect</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is a process that modifies the appearance of images or the
              quality of sound. Video and audio effects are used to change the
              shape of an image, to make visuals brighter or darker, to animate
              the position of images on the screen, to make audio louder or
              quieter, or to apply any number of other adjustments.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Footage</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Originally this was a film term used to indicate recording
              duration because film is measured in feet. This now refers to any
              original video material and is usually described in hours and
              minutes—rather than the file size.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Format</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Sometimes this word is used to refer to a media file type (AVI,
              MOV, etc.), but it actually refers to the specific frame size
              (image size), frame shape, pixel shape, and frame rate (measured
              in frames per second).
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Frame</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This means one whole still image. Video is made up of a series of
              frames that play fast enough to appear to be a continuous moving
              image. The number of frames playing per second is called the frame
              rate, measured in frames per second (fps).
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Keyframe</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              A keyframe marks the point in time where you specify the value of
              a property, such as spatial position, opacity, or audio volume. To
              create a change in a property over time, you set at least two
              keyframes—one keyframe for the value at the beginning of the
              change, and another keyframe for the value at the end of the
              change.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Media</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is your original and newly created content. This could be
              video files, graphics, photos, animation, music, voice-over, or
              audio special effects.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Metadata</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Metadata is information about information. There are many forms of
              metadata, but they always include information about something. For
              example, metadata associated with a video file might include the
              camera system used to record it or the name of the camera
              operator.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Timecode</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is a system for measuring time in recorded media. Its units
              are hours, minutes, seconds, and frames (the number of frames per
              second will vary depending on the media). Professional video
              recording systems always record timecode information.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Transition</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              This is the change that occurs when one clip ends and another
              begins. The most common type of transition between two clips is a
              cut. However, there are many transition effects available to add
              visual interest or enhance storytelling.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Vector-based graphics</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Images are usually made up of lots of dots, called pixels. The
              more pixels you have (the more visual resolution), the clearer the
              image usually appears. Pixel-based visuals are described as
              raster, or bitmap, images.When you increase the size of a
              rasterized image by scaling it up, the dots get bigger, which can
              produce softening or even jagged edges on organic shapes and
              curves. Vector graphics are not made up of pixels. Instead, they
              use a mathematical method to describe the image. You can display
              vector graphics at any resolution (any size), and they will always
              be perfectly sharp because they are drawn newly every time. This
              way, for example, a circle is a circle at any resolution (it won’t
              turn into a blocky shape if you scale it up in size).
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Affiliate Program</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              an arrangement through which the merchant pays a fee to the
              affiliate publisher for generating leads, clicks or sales from
              affiliate links. These programs can also be known as partner,
              associate, or referral programs
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>B2B</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Business-to-business exchange of products or services
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>B2C</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Business-to-consumer exchange of products or services
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Banner Ad</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              A static, animated, or rich media image that partners use to
              advertise a given product on their webpage.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Clicks</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Clicks refer to the action of engaging with the advertiser’s media
              online. On a mobile device, it’s more appropriate to refer to
              clicks as taps. Clicks on many paid search or standard banner ads
              will typically take users to the advertiser’s website or app.
              However, this may not always be the case — clicks or taps on
              certain types of display ads may trigger a video or other
              interactive element that keeps the user on the same page.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Click-Through Rate</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              The ratio of clicks to impressions, usually displayed as a
              percentage.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Closer</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              A partner who “closes the sale“, causing a consumer to convert.
              Examples include coupon, deal, loyalty, toolbar, and cart
              abandonment partners. See also: “Introducer“ and “Contributor“.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Consumer Journey</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              A consumer journey refers to the set of the advertiser’s marketing
              touchpoints that a particular user is exposed to or engages with
              over a period of time. It’s easy to confuse the consumer journey
              with the conversion paths — but they are not the same because many
              consumer journeys don’t end up with conversions. Users who end up
              converting (i.e. in retail, a conversion is often a successful
              order. In auto, a conversion is often when a user chooses to
              ‘schedule a test drive’. Consumers who convert are typically
              exposed to a number of touchpoints beforehand. When customer
              journeys lead to a conversion, the customer journey is called a
              conversion path. Not all conversions are driven by advertising.
              Some people just go directly to the advertiser’s website and make
              a purchase – even without receiving any exposure to any paid
              media. Such a conversion would essentially be organic and have a
              zero-length conversion path
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Content Marketing</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Content marketing refers to a marketing technique where the
              marketer publishes their own short or long-form content (in any
              format — written, audio, video) and pushes it out to their
              audiences in the hope that the intellectual property provides
              value for the reader. Content marketing can take on a variety of
              angles, such as beginner’s guides, educational pieces,
              infographics, thought leadership, research papers, buyer’s guides
              and more.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Content Publisher</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              A partner who promotes an advertiser’s goods and services through
              written content. This can range from an individual blogger to a
              traditional media company or magazine.
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Hue</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Refers to the pure, saturated colors seen on the color wheel above
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Tints</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Are achieved by incorporating elements of white to brighten and
              desaturate a single hue. Tints of a color are often much calmer
              than their saturated counterparts
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Tones </h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Are achieved by adding gray to a hue, dulling the overall chroma
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Shades</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Are achieved by adding portions of black to a single hue, creating
              a darker hue
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Saturation</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Refers to the overall intensity, or chroma, in a color. A pure hue
              is more saturated than its tint or tone
            </p>
          </div>

          <div className='lg:space-y-3'>
            <h1 className='text-3xl font-semibold'>Value</h1>
            <p className='text-sm text-justify lg:max-w-4xl'>
              Refers to the general lightness or darkness of a color. A lighter
              hue has more value than a darker hue
            </p>

            <div className='pl-8 space-y-5 pt-5'>
              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Primary Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Refers to the general lightness or darkness of a color. A
                  lighter hue has more value than a darker hue
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Secondary Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Secondary colors are formed from an equal mixture of two
                  separate primary colors. Yellow and blue mix to create green,
                  yellow and red mix to create orange, and blue and red mix to
                  create violet. In the color wheel, secondary colors lie in the
                  middle of and equidistant from the two primary colors used to
                  create it. The secondaries are grouped in a triad that creates
                  an inverted equilateral triangle.
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Tertiary Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Tertiary colors are created by combining adjacent primary and
                  secondary hues. For example, a primary color, such as yellow,
                  and a secondary color, such as green, mix to create
                  yellow-green. T he name of each tertiary colors begins with
                  the neighboring primary color combined with the neighboring
                  secondary color. You will never see the name green-yellow; it
                  will always be yellow-green.
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Monochromatic Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Monochromatic Colors focus on a single color, often using
                  variations of that hue by incorporating tints, tones, and
                  shades. It might sound like a boring palette, but this
                  provides variations in value that add interest and dimension
                  to your composition. This color scheme is extremely versatile
                  and easy on the eye. Using many hues in a design can often
                  overwhelm the viewer and obstruct the design’s tone, but
                  subtle color variations on one hue help to simplify a design
                  without making it too flat.
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Achromatic Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Colors that lack chroma and saturation, such as whites, grays,
                  and blacks, are called achromatic. Many artists prefer to work
                  in achromatic environments because they provide direct
                  indications of value through dramatic shadows and highlights.
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Analogous Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Analogous colors are a group of three or four colors that
                  border each other within the color wheel. The word “analogous”
                  means closely related, so the combination of these hues has a
                  harmonious appeal similar to monochromatic color schemes. When
                  picking analogous groups for your composition, keep your
                  palette grounded by using exclusively cool or warm colors
                  together. Stick to a dominant hue and accentuate with its
                  analogous counterparts.
                </p>
              </div>

              <div className='lg:space-y-3'>
                <h1 className='text-md font-semibold'>Complementary Colors</h1>
                <p className='text-sm text-justify lg:max-w-4xl'>
                  Complementary colors exist on opposite sides of the color
                  wheel; one color is usually a primary color and the other a
                  secondary color. The main complementary colors are blue and
                  orange, red and green, and yellow and purple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </section>
  );
};

export default Glossary;
