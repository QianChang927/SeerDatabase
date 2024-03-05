package
{
   import flash.display.Sprite;
   import flash.system.Security;
   
   public class _ca5e768a8a60da200c174c241a140b2a74ea5c5f6b71337c97b79f4a5082eb7d_flash_display_Sprite extends Sprite
   {
       
      
      public function _ca5e768a8a60da200c174c241a140b2a74ea5c5f6b71337c97b79f4a5082eb7d_flash_display_Sprite()
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
