package com.robot.core.ui.alert.bagItemAlert
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.geom.Point;
   import flash.text.TextField;
   import org.taomee.manager.ResourceManager;
   
   public class SpecialItemAlert
   {
       
      
      public function SpecialItemAlert()
      {
         super();
      }
      
      public static function getAlertSprite(param1:uint, param2:String) : Sprite
      {
         var txt:TextField;
         var sprite:Sprite = null;
         var id:uint = param1;
         var str:String = param2;
         sprite = UIManager.getSprite("Alarm_Special");
         ResourceManager.getResource(ItemXMLInfo.getIconURL(id),function(param1:MovieClip):void
         {
            sprite["itemIcon"].addChild(param1);
            CommonUI.centerAlign(param1,param1,new Point(0,0));
         });
         if(!str || str == "")
         {
            str = "1个" + ItemXMLInfo.getName(id) + "已经放入了你的储物箱！";
         }
         txt = sprite["txt"];
         txt.htmlText = str;
         return sprite;
      }
   }
}
