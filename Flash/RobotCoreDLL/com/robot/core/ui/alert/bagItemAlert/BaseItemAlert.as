package com.robot.core.ui.alert.bagItemAlert
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BaseItemAlert
   {
       
      
      public function BaseItemAlert()
      {
         super();
      }
      
      public static function getAlertSprite(param1:uint, param2:String) : Sprite
      {
         var bgmc:Sprite;
         var txt:TextField;
         var sprite:Sprite = null;
         var mapId:uint = 0;
         var icon:Sprite = null;
         var applyBtn:SimpleButton = null;
         var apply:Function = null;
         var onLoadIcon:Function = null;
         var _url:String = null;
         var id:uint = param1;
         var str:String = param2;
         apply = function(param1:MouseEvent):void
         {
            var _loc2_:uint = 0;
            if(Boolean(param1) && param1.currentTarget.name == "icon")
            {
               _loc2_ = uint((sprite["icon"] as MovieClip).currentFrame);
               if(_loc2_ == 2)
               {
                  EventManager.dispatchEvent(new Event(Event.CLOSE));
                  ModuleManager.showAppModule("EggWareHousePanel",1);
               }
               else if(_loc2_ == 5)
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("ExshiwExpPanel"),"正在打开兑换面板....");
               }
               else if(_loc2_ == 6)
               {
                  ModuleManager.showAppModule("EggWareHousePanel",2);
               }
               else if(mapId)
               {
                  MapManager.changeMap(mapId);
               }
            }
            if(param1)
            {
               param1.currentTarget.removeEventListener(MouseEvent.CLICK,apply);
            }
            else
            {
               applyBtn.removeEventListener(MouseEvent.CLICK,apply);
            }
            DisplayUtil.removeForParent(sprite);
         };
         onLoadIcon = function(param1:DisplayObject):void
         {
            icon.addChild(param1);
         };
         if(!str || str == "")
         {
            str = "1个" + ItemXMLInfo.getName(id) + "已经放入了你的储物箱！";
         }
         sprite = UIManager.getSprite("Alarm_New");
         sprite["equip"].gotoAndStop(1);
         sprite["icon"].gotoAndStop(1);
         if(!(id >= 10001 && id <= 29999))
         {
            if(ItemXMLInfo.getCatID(id) == 10)
            {
               sprite["icon"].gotoAndStop(6);
               sprite["equip"].gotoAndStop(2);
               if(!str || str == "")
               {
                  str = "1个" + ItemXMLInfo.getName(id) + "已经放入你的元神赋形装置中！";
               }
            }
            else if(ItemXMLInfo.isJingYuan(id))
            {
               sprite["icon"].gotoAndStop(2);
               sprite["equip"].gotoAndStop(3);
               if(!str || str == "")
               {
                  str = "1个" + ItemXMLInfo.getName(id) + "已经放入你的分子转化仪中！";
               }
            }
            else if(id >= 400063 && id <= 400065)
            {
               sprite["icon"].gotoAndStop(5);
               mapId = 103;
            }
            else if(id == 1200019)
            {
               mapId = 107;
               sprite["icon"].gotoAndStop(3);
               MapManager.addAppArrowListener(107,907,269,30);
            }
            else if(id == 400863)
            {
               mapId = 5;
               sprite["icon"].gotoAndStop(4);
               MapManager.addAppArrowListener(5,808,110,30);
            }
            else if(id == 1713226 && BitBuffSetClass.getState(23456) == 0)
            {
               BitBuffSetClass.setState(23456,1);
            }
         }
         if(sprite["icon"].currentFrame != 1)
         {
            sprite["icon"].addEventListener(MouseEvent.CLICK,apply);
         }
         icon = new Sprite();
         icon.x = icon.y = 70;
         sprite.addChild(icon);
         bgmc = sprite["bgMc"];
         txt = sprite["txt"];
         txt.htmlText = str;
         applyBtn = sprite["applyBtn"];
         applyBtn.addEventListener(MouseEvent.CLICK,apply);
         if(CountermarkXMLInfo.isminMark(id))
         {
            _url = CountermarkXMLInfo.getIconURL(id);
            ResourceManager.getResource(_url,onLoadIcon);
         }
         else
         {
            ResourceManager.getResource(ItemXMLInfo.getIconURL(id),onLoadIcon);
         }
         return sprite;
      }
   }
}
