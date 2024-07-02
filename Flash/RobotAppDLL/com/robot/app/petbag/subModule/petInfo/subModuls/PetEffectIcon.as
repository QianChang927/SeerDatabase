package com.robot.module.app.petBag.subModule.petInfo.subModuls
{
   import com.robot.app.info.BulaikeEffectInfo;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.mapProcess.control.AngelEvilController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.EffectIconControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.petBag.DataKeys;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetEffectIcon extends PetBagSubModule
   {
       
      
      private const ICON_WIDTH:Number = 35.5;
      
      private var _mainUI:MovieClip;
      
      private var specialEffIds:Array;
      
      private var specialIconIndex:int;
      
      private var specialMc:MovieClip;
      
      private var tmpTip:String;
      
      private var tmpEid:int;
      
      public function PetEffectIcon(mainUI:MovieClip)
      {
         this.specialEffIds = [685,866,903,992,1038,1128];
         super();
         this._mainUI = mainUI;
         moduleData.listenTo(DataKeys.FOCUS_PET,this.onFocusPetChange);
         this.update();
      }
      
      override protected function onFocusPetChange() : void
      {
         this.update();
      }
      
      protected function update() : void
      {
         var effectInfo:PetEffectInfo = null;
         var tip:String = null;
         var isHaveAdd:Boolean = false;
         var index0:uint = 0;
         var effect_0:PetEffectInfo = null;
         var arg:String = null;
         if(focusPet == null)
         {
            return;
         }
         this._mainUI.visible = false;
         DisplayUtil.removeAllChild(this._mainUI);
         _eventCom.removeEvent(this._mainUI,MouseEvent.CLICK,this.effectClick);
         var i:int = 0;
         if(focusPet.id == 261 || focusPet.id == 1845)
         {
            SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect);
            SocketConnection.send(CommandID.M_2149);
         }
         else if(focusPet.id == 875 || focusPet.id == 2341)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE);
         }
         else if(focusPet.id == 798)
         {
            SocketConnection.addCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
            SocketConnection.send(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,0);
         }
         else if(focusPet.id == 597 || focusPet.id == 599)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,focusPet.catchTime);
         }
         else if(focusPet.id == 70 || focusPet.id == 2394)
         {
            SocketConnection.addCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
            SocketConnection.send(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,focusPet.catchTime);
         }
         else if(focusPet.id == 1287 || focusPet.id == 1288)
         {
            if(AngelEvilController.allHave)
            {
               tip = "每回合50%概率消除害怕状态";
            }
            else
            {
               tip = "每回合40%概率消除害怕状态";
            }
            this.addSpecialIcon("icon_1287",tip);
         }
         else if(focusPet.id == 1289 || focusPet.id == 1290)
         {
            if(AngelEvilController.allHave)
            {
               tip = "每回合50%概率消除疲惫状态";
            }
            else
            {
               tip = "每回合40%概率消除疲惫状态";
            }
            this.addSpecialIcon("icon_1287",tip);
         }
         else
         {
            isHaveAdd = false;
            for(index0 = 0; index0 < focusPet.effectList.length; index0++)
            {
               effect_0 = focusPet.effectList[index0];
               arg = String(effect_0.args);
               if(EffectIconControl.getIconId(focusPet.id,effect_0.effectID,arg) > 0)
               {
                  this.addeEffectIcon(focusPet.id,effect_0.effectID,arg);
                  isHaveAdd = true;
                  return;
               }
               if(EffectIconControl.getIconId(focusPet.id,effect_0.effectID) > 0)
               {
                  this.addeEffectIcon(focusPet.id,effect_0.effectID);
                  isHaveAdd = true;
                  return;
               }
            }
            if(!isHaveAdd)
            {
               if(EffectIconControl.getIconId(focusPet.id) > 0)
               {
                  this.addeEffectIcon(focusPet.id);
               }
            }
         }
      }
      
      private function addeEffectIcon(infoId:int, effectId:int = 0, arg:String = "") : void
      {
         var tips:String = null;
         var label:int = 0;
         var tag:Array = null;
         var des:Array = null;
         var icon:DisplayObject = null;
         var iconId:int = 0;
         var eid:int = 0;
         var obj:Object = null;
         var limitedType:int = int(EffectIconControl.getLimitedType(focusPet.id,effectId,arg));
         var specificIdArr:Array = EffectIconControl.getSpecificIdArr(focusPet.id,effectId,arg);
         iconId = 0;
         var temp:int = 0;
         if(Boolean(this.specialMc))
         {
            if(Boolean(this.specialMc.parent))
            {
               this.specialMc.parent.removeChild(this.specialMc);
            }
            this.specialMc = null;
         }
         _eventCom.removeEvent(this._mainUI,MouseEvent.ROLL_OVER,this.overHandler);
         _eventCom.removeEvent(this._mainUI,MouseEvent.ROLL_OUT,this.outHandler);
         if(limitedType > 0)
         {
            EffectIconControl.getCompetlelimited(limitedType,specificIdArr,function():void
            {
               iconId = EffectIconControl.getIconId(focusPet.id,effectId,arg);
               tips = EffectIconControl.getTips(focusPet.id,effectId,arg);
               label = EffectIconControl.getLabel(focusPet.id,effectId,arg);
               tag = EffectIconControl.getTag(focusPet.id,effectId,arg);
               des = EffectIconControl.getDes(focusPet.id,effectId,arg);
               obj = EffectIconControl.getEffectObj(focusPet.id,effectId,arg);
               if(Boolean(obj))
               {
                  eid = obj["id"];
               }
               if(iconId > 0)
               {
                  icon = KTool.getIcon(ClientConfig.getResPath("effectIcon/" + iconId + ".swf"),40,new Point(20,20)) as Sprite;
                  addEffectIcon(icon,tips,label,tag,des,eid);
               }
            });
         }
         else
         {
            iconId = int(EffectIconControl.getIconId(focusPet.id,effectId,arg));
            tips = String(EffectIconControl.getTips(focusPet.id,effectId,arg));
            label = int(EffectIconControl.getLabel(focusPet.id,effectId,arg));
            tag = EffectIconControl.getTag(focusPet.id,effectId,arg);
            des = EffectIconControl.getDes(focusPet.id,effectId,arg);
            obj = EffectIconControl.getEffectObj(focusPet.id,effectId,arg);
            if(Boolean(obj))
            {
               eid = int(obj["id"]);
            }
            if(iconId > 0)
            {
               icon = KTool.getIcon(ClientConfig.getResPath("effectIcon/" + iconId + ".swf"),this.ICON_WIDTH,new Point(0,0)) as Sprite;
               this.addEffectIcon(icon,tips,label,tag,des,eid);
            }
         }
      }
      
      private function addMcTips(mc:DisplayObject, temp:int) : void
      {
         this._mainUI.visible = true;
         DisplayUtil.removeAllChild(this._mainUI);
         this._mainUI.addChild(mc);
         this.specialIconIndex = temp;
      }
      
      private function overHandler(e:MouseEvent) : void
      {
         var opoint:Point = null;
         var point:Point = null;
         if(this.specialMc != null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("2015/1231/tip"),function(mc:MovieClip):void
            {
               mc.gotoAndStop(specialIconIndex + 1);
               LevelManager.appLevel.addChild(mc);
               var opoint:Point = new Point(e.stageX,e.stageY);
               var point:Point = mc.parent.globalToLocal(opoint);
               mc.x = point.x + 5;
               mc.y = point.y + 10;
               specialMc = mc;
            });
         }
         else
         {
            this.specialMc.gotoAndStop(this.specialIconIndex + 1);
            LevelManager.appLevel.addChild(this.specialMc);
            opoint = new Point(e.stageX,e.stageY);
            point = this.specialMc.parent.globalToLocal(opoint);
            this.specialMc.x = point.x + 5;
            this.specialMc.y = point.y + 10;
         }
      }
      
      private function outHandler(e:MouseEvent) : void
      {
         if(Boolean(this.specialMc))
         {
            if(Boolean(this.specialMc.parent))
            {
               this.specialMc.parent.removeChild(this.specialMc);
            }
         }
      }
      
      private function addSpecialIcon(symbolName:String, tip:String, label:int = 0, tagArr:* = null, dessArr:* = null) : void
      {
         DisplayUtil.removeAllChild(this._mainUI);
         var icon:DisplayObject = UIManager.getMovieClip("icon_bulaike_yi");
         CommonUI.centerAlign(icon,this._mainUI,new Point(0,0));
         CommonUI.equalScale(icon,this.ICON_WIDTH,this.ICON_WIDTH);
         this.addEffectIcon(icon,tip,label,tagArr,dessArr);
      }
      
      private function addEffectIcon(icon:DisplayObject, tip:String, label:int = 0, tagArr:* = null, dessArr:* = null, eid:int = 0) : void
      {
         this._mainUI.visible = true;
         DisplayUtil.removeAllChild(this._mainUI);
         this._mainUI.addChild(icon);
         this.tmpTip = tip;
         this.tmpEid = eid;
         _eventCom.addClickEvent(this._mainUI,this.effectClick);
      }
      
      private function effectClick(e:MouseEvent) : void
      {
         ModuleManager.showAppModule("EffectDesNewPanel",{
            "tip":this.tmpTip,
            "eid":this.tmpEid,
            "pid":focusPet.id
         });
      }
      
      private function checkHasSuperLeiyi(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
         var data:ByteArray = e.data as ByteArray;
         var dataByBits:Array = KTool.readDataByBits(data,32);
         if(dataByBits[1] == 1)
         {
            this.addSpecialIcon("icon_70","电系技能伤害提升");
         }
      }
      
      private function onGaiyaEffect(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         var info:GaiyaEffectInfo = e.data as GaiyaEffectInfo;
         if(info.defEffectID == 1)
         {
            this.addSpecialIcon("icon_gaiya_shixuezhili","嗜血之力");
         }
         else if(info.defEffectID == 2)
         {
            this.addSpecialIcon("icon_gaiya_xieqilingran","邪气凛然");
         }
         else if(info.defEffectID == 3)
         {
            this.addSpecialIcon("icon_gaiya_shipotianjing","石破天惊");
         }
      }
      
      private function onBulaikeEffect(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
         var info:BulaikeEffectInfo = e.data as BulaikeEffectInfo;
         if(info.defEffectID == 1)
         {
            this.addSpecialIcon("icon_bulaike_kuang","狂之印");
         }
         else if(info.defEffectID == 2)
         {
            this.addSpecialIcon("icon_bulaike_ba","霸之体");
         }
         else if(info.defEffectID == 3)
         {
            this.addSpecialIcon("icon_bulaike_yi","意之念");
         }
      }
      
      private function onKaxiusiResult(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
         var dataArr:ByteArray = e.data as ByteArray;
         dataArr.readUnsignedInt();
         dataArr.readUnsignedInt();
         dataArr.readUnsignedInt();
         dataArr.readUnsignedInt();
         dataArr.readUnsignedInt();
         var haveGot:uint = dataArr.readUnsignedInt();
         if(Boolean(haveGot))
         {
            this.addSpecialIcon("icon_798","狂攻之力");
         }
      }
      
      private function checkHasEat(e:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
         var data:ByteArray = e.data as ByteArray;
         var dataByBits:Array = KTool.readDataByBits(data,32);
         if(dataByBits[0] == 1)
         {
            this.addSpecialIcon("icon_fanzhiji_lie","帮助烈刃一族必定繁殖出火刃");
         }
      }
      
      public function hide() : void
      {
         this.specialMc = null;
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_BULAIKE_ATTRIBUTE,this.onBulaikeEffect);
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasEat);
         SocketConnection.removeCmdListener(CommandID.ARESUNIONCHALLENGE_GET_TRAIN_PROGRESS,this.onKaxiusiResult);
         SocketConnection.removeCmdListener(CommandID.FIRE_EDGE_REBORN_CHECK_EAT_MEDICINE,this.checkHasSuperLeiyi);
      }
      
      override public function destory() : void
      {
         DisplayUtil.removeAllChild(this._mainUI);
         this.hide();
         this.specialEffIds = null;
         this._mainUI = null;
         super.destory();
      }
   }
}
