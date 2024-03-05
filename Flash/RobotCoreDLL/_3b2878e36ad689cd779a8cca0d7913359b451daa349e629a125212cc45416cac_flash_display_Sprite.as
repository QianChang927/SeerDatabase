package
{
   import flash.display.Sprite;
   import flash.system.Security;
   
   public class _3b2878e36ad689cd779a8cca0d7913359b451daa349e629a125212cc45416cac_flash_display_Sprite extends Sprite
   {
       
      
      public function _3b2878e36ad689cd779a8cca0d7913359b451daa349e629a125212cc45416cac_flash_display_Sprite()
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
