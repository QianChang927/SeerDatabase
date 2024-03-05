package
{
   import flash.display.MovieClip;
   
   public dynamic class Fight_hits extends MovieClip
   {
       
      
      public function Fight_hits()
      {
         super();
         addFrameScript(24,this.frame25);
      }
      
      internal function frame25() : *
      {
         stop();
         this.parent.removeChild(this);
      }
   }
}
