package com.robot.module.app
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.config.xmlInfo.PetSkinInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DiamondHardnessChallengeMainPanel extends ActivityModel
   {
      private var time:int;
      
      private var fightTime:int;
      
      private var scrollBar:UIScrollBar;
      
      private var tasks:Array;
      
      private var _curTask:Array;
      
      private var perPage:int = 6;
      
      private var itemMcs:Array;
      
      private var maxHard:int;
      
      public function DiamondHardnessChallengeMainPanel()
      {
         super();
         resUrl = "2024/1115/DiamondHardnessChallengeMainPanel";
         configUrl = "2024/1115/DiamondHardnessChallenge";
      }
      
      override public function show() : void
      {
         super.show();
         this.scrollBar = new UIScrollBar(ui["sub"]["bar"]["slider"],ui["sub"]["bar"]["track"],1,ui["sub"]["bar"]["upArrow"],ui["sub"]["bar"]["downArrow"]);
         this.scrollBar.wheelObject = ui["sub"];
         this.scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         _ui["sub"].visible = false;
      }
      
      private function onScrollMove(e:* = null) : void
      {
         var rValue:int = 0;
         var reward:Boolean = false;
         var canreward:Boolean = false;
         _ui["sub"]["mc"].gotoAndStop(this.scrollBar.index == 0 ? 1 : 2);
         for(var j:int = 0; j < 6; j++)
         {
            rValue = int(getValue("value21"));
            reward = KTool.getBit(rValue,j + 7) == 1;
            canreward = KTool.getBit(rValue,j + 1) == 1;
            if(Boolean(_ui["sub"]["mc"]["mc_" + j]))
            {
               _ui["sub"]["mc"]["mc_" + j]["txt"].text = "(" + Math.min(this.time,j * 2 + 1) + "/" + (j * 2 + 1) + ")";
            }
            if(Boolean(_ui["sub"]["mc"]["btnmc_" + j]))
            {
               _ui["sub"]["mc"]["btnmc_" + j].gotoAndStop(reward ? 3 : (canreward ? 1 : 2));
            }
         }
      }
      
      override protected function updatePanel() : void
      {
         var value0:int;
         var initValue:int = int(getValue("value22"));
         if(KTool.getBit(initValue,1) == 0)
         {
            SocketConnection.sendByQueue(41862,[1,0],function(e:SocketEvent):void
            {
               refresh();
            });
            return;
         }
         value0 = int(getValue("value0"));
         this.maxHard = value0 >> 16 & 0xFF;
         this.time = value0 >> 8 & 0xFF;
         _ui["time"].text = this.time;
         this.fightTime = KTool.getBit(initValue,2);
         _ui["btnmc"].gotoAndStop(this.fightTime < 1 ? 1 : 2);
         this.onScrollMove();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("Vip15thCollectionPanel");
               break;
            case "go":
               this.hide();
               ModuleManager.showAppModule("DiamondHardnessChallengeJDPanel");
               break;
            case "task":
               this.scrollBar.index = 0;
               this.scrollBar.totalLength = 2;
               _ui["sub"].visible = true;
               this.showTask();
               break;
            case "pclose":
               _ui["sub"].visible = false;
               break;
            case "reward":
               SocketConnection.sendByQueue(41862,[3 + pindex,0],function(e:SocketEvent):void
               {
                  refresh();
               });
               break;
            case "fight":
               this.hide();
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(e:PetFightEvent):void
               {
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  ModuleManager.showAppModule("DiamondHardnessChallengeMainPanel");
               });
               FightManager.fightNoMapBoss("石晶晶",18693);
               break;
            case "map":
               this.hide();
               MapManager.changeMap(1707);
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
      
      private function showTask() : void
      {
         this.onScrollMove();
      }
      
      private function clearItem() : void
      {
         var j:int = 0;
         if(Boolean(this.itemMcs))
         {
            for(j = 0; j < this.itemMcs.length; j++)
            {
               ToolTipManager.remove(this.itemMcs[j]);
               this.itemMcs[j].removeEventListener(MouseEvent.ROLL_OVER,this.overHandle);
               this.itemMcs[j].removeEventListener(MouseEvent.ROLL_OUT,this.outHandle);
               if(Boolean(this.itemMcs[j].parent))
               {
                  this.itemMcs[j].parent.removeChild(this.itemMcs[j]);
               }
               this.itemMcs[j] = null;
            }
            this.itemMcs = null;
         }
      }
      
      private function outHandle(e:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      private function overHandle(e:MouseEvent) : void
      {
         var id:int = int(e.currentTarget.parent.cid);
         var info:SingleItemInfo = new SingleItemInfo();
         info.itemID = id;
         ItemInfoTip.show(info);
      }
      
      private function loadItem(id:uint, container:DisplayObjectContainer, scale:int = 1, type:int = 1) : void
      {
         var str:String;
         var rSkinId:int = 0;
         var skinInfo:PetSkinInfo = null;
         DisplayUtil.removeAllChild(container as MovieClip);
         str = "";
         if(type == 1)
         {
            str = ItemXMLInfo.getIconURL(id);
         }
         else if(type == 2)
         {
            str = CountermarkXMLInfo.getIconURL(id);
         }
         else if(type == 6)
         {
            rSkinId = int(id);
            skinInfo = PetSkinXMLInfo.getSkinInfo(rSkinId);
            str = ClientConfig.getPetHeadPath(skinInfo.monId,0,skinInfo.id);
         }
         else if(type == 12)
         {
            str = ClientConfig.getClothSuitPath(id);
         }
         ResourceManager.getResource(str,function(dis:DisplayObject):void
         {
            if(_ui == null || container["cid"] != id)
            {
               return;
            }
            var mc:MovieClip = dis as MovieClip;
            if(type == 6)
            {
               ToolTipManager.add(mc,PetSkinXMLInfo.getSkinInfo(id).name);
               mc.scaleX = mc.scaleY = 0.5;
            }
            else if(type == 12)
            {
               ToolTipManager.add(mc,SuitXMLInfo.getName(id));
            }
            else
            {
               mc.addEventListener(MouseEvent.ROLL_OVER,overHandle);
               mc.addEventListener(MouseEvent.ROLL_OUT,outHandle);
            }
            if(itemMcs == null)
            {
               itemMcs = [];
            }
            itemMcs.push(mc);
            CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
            container.addChild(mc);
         },"item");
      }
      
      override public function hide() : void
      {
         this.clearItem();
         if(Boolean(this.scrollBar))
         {
            this.scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this.scrollBar.destroy();
            this.scrollBar = null;
         }
         this.tasks = null;
         this._curTask = null;
         super.hide();
      }
   }
}

