package
{
   import flash.display.MovieClip;
   
   public dynamic class Fight_kill extends MovieClip
   {
       
      
      public function Fight_kill()
      {
         super();
         addFrameScript(2,this.frame3);
      }
      
      internal function frame3() : *
      {
         stop();
         this.parent.removeChild(this);
      }
   }
}
