package com.robot.core.ui.nono
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.RectangleMask;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.effect.ColorFilter;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.Utils;
   
   public class NonoShortcut
   {
      
      private static const LENGTH:uint = 8;
      
      public static var disableStorageMap:Array = [500];
      
      public static var disablePetMap:Array = [798];
      
      private static var _ui:Sprite;
      
      private static var _bgmc:Sprite;
      
      private static var _info:NonoInfo;
      
      private static var _flag:Boolean;
      
      private static var _id:Array;
      
      private static var _tip:Array;
      
      private static var _fun:Array;
      
      private static var _item:Array;
       
      
      public function NonoShortcut()
      {
         super();
      }
      
      private static function makeArray() : void
      {
         _id = ["1","3"];
         _id.push(MainManager.actorInfo.isVip ? "700017" : "700018");
         _tip = ["精灵治疗","经验分配"];
         _tip.push(MainManager.actorInfo.isVip ? "飞行模式" : "开通超No快捷入口");
         _fun = [onCure,onExp];
         _fun.push(MainManager.actorInfo.isVip ? hide : function():void
         {
            SocketConnection.send(1022,86054100);
            var _loc1_:* = getDefinitionByName("com.robot.app.linkManager.LinkToUrlManager");
            _loc1_.linkUrl(_loc1_.LINK_TYPE_4);
         });
      }
      
      private static function addKeyBg() : void
      {
         var _loc2_:NonoShortcutKeyItem = null;
         if(_item == null)
         {
            _item = [];
         }
         var _loc1_:int = 0;
         while(_loc1_ < LENGTH)
         {
            _loc2_ = new NonoShortcutKeyItem();
            _ui["key_" + _loc1_].addChild(_loc2_);
            _item.push(_loc2_);
            _loc1_++;
         }
      }
      
      private static function clearKeyBg() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < LENGTH)
         {
            (_item[_loc1_] as NonoShortcutKeyItem).destroy();
            _loc1_++;
         }
      }
      
      private static function setData() : void
      {
         var _loc2_:NonoShortcutKeyItem = null;
         var _loc1_:int = 0;
         while(_loc1_ < LENGTH)
         {
            if(_id[_loc1_] != null)
            {
               if(_id[_loc1_] != undefined)
               {
                  _loc2_ = _item[_loc1_] as NonoShortcutKeyItem;
                  if(_fun[_loc1_] != undefined)
                  {
                     _loc2_.setInfo(_id[_loc1_],_tip[_loc1_],_fun[_loc1_]);
                  }
                  else
                  {
                     _loc2_.setInfo(_id[_loc1_],_tip[_loc1_]);
                  }
               }
            }
            _loc1_++;
         }
      }
      
      public static function show(param1:Point, param2:NonoInfo, param3:Boolean) : void
      {
         _info = param2;
         _flag = param3;
         makeArray();
         if(_ui == null)
         {
            _ui = UIManager.getMovieClip("UI_NonoShortcut");
            addKeyBg();
         }
         clearKeyBg();
         _ui.x = param1.x;
         _ui.y = param1.y;
         _ui.addEventListener(MouseEvent.ROLL_OUT,onOut);
         LevelManager.appLevel.addChild(_ui);
         _bgmc = _ui["bgmc"];
         _bgmc.buttonMode = true;
         _bgmc.addEventListener(MouseEvent.CLICK,onClick);
         setData();
         if(disableStorageMap.indexOf(MapManager.currentMap.id) != -1 || MapXMLInfo.getIsLocal(MapManager.currentMap.id))
         {
            _ui["key_2"].filters = [ColorFilter.setGrayscale()];
            _ui["key_2"].mouseEnabled = false;
            _ui["key_2"].mouseChildren = false;
            _ui["key_3"].filters = [ColorFilter.setGrayscale()];
            _ui["key_3"].mouseEnabled = false;
            _ui["key_3"].mouseChildren = false;
         }
         else if(disablePetMap.indexOf(MapManager.currentMap.id) != -1)
         {
            _ui["key_2"].filters = [ColorFilter.setGrayscale()];
            _ui["key_2"].mouseEnabled = false;
            _ui["key_2"].mouseChildren = false;
            _ui["key_3"].filters = [ColorFilter.setGrayscale()];
            _ui["key_3"].mouseEnabled = false;
            _ui["key_3"].mouseChildren = false;
         }
         else
         {
            _ui["key_2"].filters = [];
            _ui["key_2"].mouseEnabled = true;
            _ui["key_2"].mouseChildren = true;
            _ui["key_3"].filters = [];
            _ui["key_3"].mouseEnabled = true;
            _ui["key_3"].mouseChildren = true;
         }
      }
      
      private static function onEmail() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("email/EmailMainPanel"),"",null);
      }
      
      public static function hide() : void
      {
         if(_ui)
         {
            clearKeyBg();
            _ui.removeEventListener(MouseEvent.ROLL_OUT,onOut);
            _bgmc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_ui);
            EventManager.dispatchEvent(new RobotEvent(RobotEvent.NONO_SHORTCUT_HIDE));
         }
      }
      
      private static function onOut(param1:MouseEvent) : void
      {
         hide();
      }
      
      private static function onCure() : void
      {
         var cls:* = undefined;
         if(_info.superNono)
         {
            PetManager.cureAll();
         }
         else
         {
            cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
            if(cls.bonusType == 1)
            {
               PetManager.cureAll();
            }
            else
            {
               SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
               {
                  PetManager.cureAll();
               });
            }
         }
         hide();
      }
      
      private static function onFollow() : void
      {
         if(_flag)
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
         else
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
         }
         hide();
      }
      
      private static function onExp() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"),"正在打开经验分配器....");
      }
      
      private static function onPetStorage() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         RectangleMask.dispatchEvent(new Event(RectangleMask.GOTO_NEXT));
         ModuleManager.showModule(ClientConfig.getAppModule("NonoInfoPanel"),"正在打开NoNo信息面板...",_info);
      }
      
      private static function onAlarm() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/NonoGiftPanel"),"正在打开...");
      }
      
      public static function get ui() : Sprite
      {
         return _ui;
      }
   }
}
