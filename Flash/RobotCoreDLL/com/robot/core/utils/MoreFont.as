package com.robot.core.utils
{
   import flash.text.Font;
   
   public class MoreFont
   {
      
      private static var _lingxinFont:Font;
      
      private static var _fangZhengZongyi:Font;
      
      private static var _huaKangJianZhongYi:Font;
      
      {
         Font.registerFont(LingxinFont);
         Font.registerFont(FangZhengZongyi);
         Font.registerFont(HuakangJianzongyi);
      }
      
      public function MoreFont()
      {
         super();
      }
      
      public static function getLingXinFontName() : String
      {
         if(_lingxinFont == null)
         {
            _lingxinFont = new LingxinFont() as Font;
         }
         return _lingxinFont.fontName;
      }
      
      public static function getFangzhengFontName() : String
      {
         if(_fangZhengZongyi == null)
         {
            _fangZhengZongyi = new FangZhengZongyi() as Font;
         }
         return _fangZhengZongyi.fontName;
      }
      
      public static function getHuaKangJianZongyiFontName() : String
      {
         if(_huaKangJianZhongYi == null)
         {
            _huaKangJianZhongYi = new HuakangJianzongyi() as Font;
         }
         return _huaKangJianZhongYi.fontName;
      }
   }
}
