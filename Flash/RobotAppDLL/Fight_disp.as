package
{
   import flash.display.MovieClip;
   
   public dynamic class Fight_disp extends MovieClip
   {
       
      
      public function Fight_disp()
      {
         super();
         addFrameScript(0,this.frame1,17,this.frame18);
      }
      
      internal function frame1() : *
      {
         stop();
      }
      
      internal function frame18() : *
      {
         stop();
      }
   }
}
