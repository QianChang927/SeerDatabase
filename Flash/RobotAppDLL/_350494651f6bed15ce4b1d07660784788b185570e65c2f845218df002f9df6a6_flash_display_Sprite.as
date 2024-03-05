package
{
   import flash.display.Sprite;
   import flash.system.Security;
   
   public class _350494651f6bed15ce4b1d07660784788b185570e65c2f845218df002f9df6a6_flash_display_Sprite extends Sprite
   {
       
      
      public function _350494651f6bed15ce4b1d07660784788b185570e65c2f845218df002f9df6a6_flash_display_Sprite()
      {
         super();
      }
      
      public function allowDomainInRSL(... rest) : void
      {
         Security.allowDomain.apply(null,rest);
      }
      
      public function allowInsecureDomainInRSL(... rest) : void
      {
         Security.allowInsecureDomain.apply(null,rest);
      }
   }
}
