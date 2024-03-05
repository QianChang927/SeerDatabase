package com.robot.app.petUpdate.updatePanel
{
   import com.robot.app.automaticFight.AutomaticFightManager;
   import com.robot.app.control.SpaceArenaController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.protectSys.ProtectSystem;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert2.FightOverAlertManager;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class CountExpPanelManager
   {
      
      public static const NONE:uint = 0;
      
      public static const WIN:uint = 1;
      
      public static const LOST:uint = 2;
      
      private static var _bmp:Bitmap;
      
      private static var panel:MovieClip;
      
      private static var itemArr:Array = [];
      
      private static var gridSprite:Sprite;
      
      private static var fun:Function;
      
      public static var PANEL_STATUS:uint;
      
      public static var overData:Object;
      
      public static var isEmptyShow:Boolean = true;
      
      private static var id:uint;
       
      
      public function CountExpPanelManager()
      {
         super();
      }
      
      public static function showExpPanel(param1:Array, param2:Bitmap, param3:Function = null) : void
      {
         var num:uint;
         var n:uint;
         var count:uint = 0;
         var item:SingleExpItem = null;
         var i:UpdatePropInfo = null;
         var btn:SimpleButton = null;
         var grid:MovieClip = null;
         var arr:Array = param1;
         var bmp:Bitmap = param2;
         var _fun:Function = param3;
         fun = _fun;
         _bmp = bmp;
         if(AutomaticFightManager.isStart)
         {
            AutomaticFightManager.fightOver(bmp);
            return;
         }
         if(!panel)
         {
            panel = UIManager.getMovieClip("ui_ExpCount_Panel");
            btn = panel["okBtn"];
            btn.addEventListener(MouseEvent.CLICK,closePanel);
            (panel["flagMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onAddStatusClick);
            (panel["flagMC"] as MovieClip).buttonMode = true;
            (panel["flagMC"]["nonoExpMc"] as MovieClip).mouseChildren = false;
            (panel["flagMC"]["activeExpMc"] as MovieClip).mouseChildren = false;
            (panel["flagMC"]["itemExpMc"] as MovieClip).mouseChildren = false;
            (panel["flagMC"]["timeExpMc"] as MovieClip).mouseChildren = false;
            (panel["flagMC"]["studyUpBtn"] as MovieClip).mouseChildren = false;
            gridSprite = new Sprite();
            gridSprite.mouseChildren = gridSprite.mouseEnabled = false;
            gridSprite.cacheAsBitmap = true;
            panel.addChildAt(gridSprite,2);
         }
         panel["titleMC"].addFrameScript(11,null);
         if(PANEL_STATUS == WIN)
         {
            initAddStatus();
            panel["titleMC"].gotoAndPlay(1);
            panel["titleMC"].addFrameScript(11,function():void
            {
               panel["titleMC"].gotoAndStop(11);
            });
         }
         else if(PANEL_STATUS == LOST)
         {
            initAddStatus();
            panel["titleMC"].gotoAndStop(12);
         }
         else
         {
            panel["titleMC"].gotoAndStop(13);
            (panel["flagMC"]["nonoExpMc"] as MovieClip).gotoAndStop(2);
            (panel["flagMC"]["activeExpMc"] as MovieClip).gotoAndStop(2);
            (panel["flagMC"]["itemExpMc"] as MovieClip).gotoAndStop(2);
            (panel["flagMC"]["timeExpMc"] as MovieClip).gotoAndStop(2);
            (panel["flagMC"]["studyUpBtn"] as MovieClip).gotoAndStop(2);
         }
         itemArr.forEach(function(param1:SingleExpItem, param2:int, param3:Array):void
         {
            param1.destroy();
         });
         for each(i in arr)
         {
            if(PetManager.getPetInfo(i.catchTime) != null)
            {
               item = new SingleExpItem();
               item.x = 30;
               item.y = 55 + (55 + 4) * count;
               item.info = i;
               itemArr.push(item);
               panel.addChild(item);
               count++;
            }
         }
         if(count > 1)
         {
            panel["bgMC_2"].height = item.y - 32 + item.height + 4 + 108;
            panel["bgMC_1"].height = panel["bgMC_2"].y + panel["bgMC_2"].height + 10;
            panel["okBtn"].y = panel["bgMC_1"].height - 48;
            panel["flagMC"].y = panel["okBtn"].y - 4 - panel["flagMC"].height;
         }
         else
         {
            panel["flagMC"].y = 109;
            panel["okBtn"].y = 186;
            panel["bgMC_1"].height = 240;
            panel["bgMC_2"].height = 184;
            if(count == 0)
            {
               item = new SingleExpItem();
               item.x = 37;
               item.y = 49;
               item.mc["qqMC"].visible = false;
               item.mc["txt"].x = 40;
               if(PANEL_STATUS == WIN)
               {
                  item.mc["txt"].htmlText = "<font color=\'#ffff00\'>恭喜你，你在这场战斗中获得胜利啦！</font>";
               }
               else
               {
                  item.mc["txt"].htmlText = "精灵们被打败了，快打开精灵背包帮助精灵们恢复体力吧！";
               }
               panel.addChild(item);
               itemArr.push(item);
            }
         }
         panel["maskMC"].x = panel["bgMC_2"].x;
         panel["maskMC"].y = panel["bgMC_2"].y;
         panel["maskMC"].height = panel["bgMC_2"].height;
         DisplayUtil.removeAllChild(gridSprite);
         gridSprite.x = panel["bgMC_2"].x;
         gridSprite.y = panel["bgMC_2"].y;
         gridSprite.mask = panel["maskMC"];
         num = Math.ceil(panel["bgMC_2"].height / 178);
         n = 0;
         while(n < num)
         {
            grid = UIManager.getMovieClip("ui_exp_panel_grid");
            grid.y = grid.height * n;
            gridSprite.addChild(grid);
            n++;
         }
         MainManager.getStage().addChild(panel);
         DisplayUtil.align(panel,null,AlignType.MIDDLE_CENTER);
         PANEL_STATUS = NONE;
         if(SpaceArenaController.isThis)
         {
            id = setTimeout(function():void
            {
               closePanel(null);
            },5000);
         }
      }
      
      private static function initAddStatus() : void
      {
         var _loc1_:* = null;
         var _loc3_:Object = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         ToolTipManager.add(panel["flagMC"]["nonoExpMc"],"超能NoNo用户可以享受经验翻倍加成。");
         if(MainManager.actorInfo.superNono)
         {
            (panel["flagMC"]["nonoExpMc"] as MovieClip).gotoAndStop(1);
         }
         else
         {
            (panel["flagMC"]["nonoExpMc"] as MovieClip).gotoAndStop(2);
         }
         var _loc2_:Boolean = false;
         for each(_loc3_ in MapNamePanel.expInfos)
         {
            _loc4_ = uint(_loc3_.time1.substr(0,1)) * 10 + uint(_loc3_.time1.substr(1,1));
            _loc5_ = uint(_loc3_.time1.substr(2,1)) * 10 + uint(_loc3_.time1.substr(3,1));
            _loc6_ = uint(_loc3_.time2.substr(0,1)) * 10 + uint(_loc3_.time2.substr(1,1));
            _loc7_ = uint(_loc3_.time2.substr(2,1)) * 10 + uint(_loc3_.time2.substr(3,1));
            if(SystemTimerManager.sysDate.hours * 60 + SystemTimerManager.sysDate.minutes >= _loc4_ * 60 + _loc5_ && SystemTimerManager.sysDate.hours * 60 + SystemTimerManager.sysDate.minutes < _loc6_ * 60 + _loc7_)
            {
               _loc2_ = true;
               _loc1_ = "今天的" + _loc3_.time1.substr(0,2) + ":" + _loc3_.time1.substr(2,2) + "-" + _loc3_.time2.substr(0,2) + ":" + _loc3_.time2.substr(2,2) + "可以享受" + _loc3_.exp + "倍经验";
               ToolTipManager.add(panel["flagMC"]["activeExpMc"],_loc1_);
               (panel["flagMC"]["activeExpMc"]["exp"] as MovieClip).gotoAndStop(int(_loc3_.exp) - 1);
               break;
            }
         }
         if(_loc2_ == false)
         {
            ToolTipManager.remove(panel["flagMC"]["activeExpMc"]);
            (panel["flagMC"]["activeExpMc"] as MovieClip).gotoAndStop(2);
         }
         if(ProtectSystem.getDoubleExpTime())
         {
            ToolTipManager.add(panel["flagMC"]["timeExpMc"],"还剩余双倍经验电池时间" + uint(ProtectSystem.getDoubleExpTime() / 60) + "分钟。");
            (panel["flagMC"]["timeExpMc"] as MovieClip).gotoAndStop(1);
         }
         else
         {
            ToolTipManager.remove(panel["flagMC"]["timeExpMc"]);
            (panel["flagMC"]["timeExpMc"] as MovieClip).gotoAndStop(2);
         }
         initItemMc();
      }
      
      private static function initItemMc() : void
      {
         ToolTipManager.remove(panel["flagMC"]["studyUpBtn"]);
         ToolTipManager.remove(panel["flagMC"]["itemExpMc"]);
         panel["flagMC"]["studyUpBtn"].gotoAndStop(2);
         (panel["flagMC"]["itemExpMc"] as MovieClip).gotoAndStop(2);
         SocketConnection.addCmdListener(CommandID.FIGHT_ITEM_EXP_INFO,onGetItemInfo);
         SocketConnection.send(CommandID.FIGHT_ITEM_EXP_INFO);
      }
      
      private static function onGetItemInfo(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.FIGHT_ITEM_EXP_INFO,onGetItemInfo);
         var _loc2_:String = "";
         var _loc3_:String = "";
         var _loc5_:ByteArray;
         var _loc6_:uint = (_loc5_ = param1.data as ByteArray).readUnsignedInt();
         var _loc7_:uint = _loc5_.readUnsignedInt();
         _loc4_ = 0;
         while(_loc4_ < _loc6_)
         {
            if(_loc4_ == 0)
            {
               _loc8_ = _loc5_.readUnsignedInt();
               _loc9_ = _loc5_.readUnsignedInt();
               _loc2_ += ItemXMLInfo.getName(_loc8_) + "开启中，还剩" + _loc9_ + "次";
            }
            else
            {
               _loc8_ = _loc5_.readUnsignedInt();
               _loc9_ = _loc5_.readUnsignedInt();
               _loc2_ += "\n" + ItemXMLInfo.getName(_loc8_) + "开启中，还剩" + _loc9_ + "次";
            }
            _loc4_++;
         }
         _loc4_ = 0;
         while(_loc4_ < _loc7_)
         {
            if(_loc4_ == 0)
            {
               _loc8_ = _loc5_.readUnsignedInt();
               _loc9_ = _loc5_.readUnsignedInt();
               _loc3_ += ItemXMLInfo.getName(_loc8_) + "开启中，还剩" + _loc9_ + "次";
            }
            else
            {
               _loc8_ = _loc5_.readUnsignedInt();
               _loc9_ = _loc5_.readUnsignedInt();
               _loc3_ += "\n" + ItemXMLInfo.getName(_loc8_) + "开启中，还剩" + _loc9_ + "次";
            }
            _loc4_++;
         }
         if(_loc6_ > 0)
         {
            ToolTipManager.add(panel["flagMC"]["itemExpMc"],_loc2_);
            (panel["flagMC"]["itemExpMc"] as MovieClip).gotoAndStop(1);
            if(ItemXMLInfo.getName(_loc8_).indexOf("双倍") != -1)
            {
               (panel["flagMC"]["itemExpMc"]["exp"] as MovieClip).gotoAndStop(1);
            }
            else if(ItemXMLInfo.getName(_loc8_).indexOf("三倍") != -1)
            {
               (panel["flagMC"]["itemExpMc"]["exp"] as MovieClip).gotoAndStop(2);
            }
         }
         if(_loc7_ > 0)
         {
            ToolTipManager.add(panel["flagMC"]["studyUpBtn"],_loc3_);
            panel["flagMC"]["studyUpBtn"].gotoAndStop(1);
         }
      }
      
      private static function onAddStatusClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "nonoExpMc":
               closePanel(null);
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               break;
            case "studyUpBtn":
               closePanel(null);
               ModuleManager.showModule(ClientConfig.getAppModule("SupermarketPanel"),"正在打开……","成长加速器");
         }
      }
      
      private static function closePanel(param1:MouseEvent) : void
      {
         ToolTipManager.remove(panel["flagMC"]["nonoExpMc"]);
         ToolTipManager.remove(panel["flagMC"]["itemExpMc"]);
         ToolTipManager.remove(panel["flagMC"]["timeExpMc"]);
         ToolTipManager.remove(panel["flagMC"]["activeExpMc"]);
         ToolTipManager.remove(panel["flagMC"]["studyUpBtn"]);
         SocketConnection.removeCmdListener(CommandID.FIGHT_ITEM_EXP_INFO,onGetItemInfo);
         FightManager.isCanSave = false;
         clearTimeout(id);
         DisplayUtil.removeForParent(_bmp);
         DisplayUtil.removeForParent(panel);
         if(fun != null)
         {
            fun();
         }
         FightOverAlertManager.showNext();
         FightDispatcher.dispatchEvent(new PetFightEvent(PetFightEvent.ALARM_CLICK,overData));
      }
      
      private static function saveHandler(param1:MouseEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.SAVE_FIGHT_INFO,onSave);
         SocketConnection.send(CommandID.SAVE_FIGHT_INFO);
      }
      
      private static function onSave(param1:SocketEvent) : void
      {
         var id:uint = 0;
         var event:SocketEvent = param1;
         id = setTimeout(function():void
         {
            clearTimeout(id);
         },3000);
      }
   }
}
