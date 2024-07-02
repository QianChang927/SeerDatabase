package com.robot.module.app.petBag.subModule.petInfo
{
   import com.robot.app.petbag.ui.PetEffectIcon;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.FiveColorSnowBallController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemTipXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetAdvanceXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetEffectInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.module.SubModuleController;
   import com.robot.module.app.petBag.PetBagSubModule;
   import com.robot.module.app.petBag.subModule.petInfo.subModuls.MarkAndSkillStone;
   import com.robot.module.app.petBag.subModule.petInfo.subModuls.PetEffectIcon;
   import com.robot.module.app.petBag.subModule.petInfo.subModuls.PetFriendIcon;
   import com.robot.module.app.petBag.subModule.petInfo.subModuls.PetGroupExtraEffect;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PetInfoModule extends PetBagSubModule
   {
       
      
      private var _subModules:SubModuleController;
      
      private var petGroupExtraEffect:PetGroupExtraEffect;
      
      private var _tipMC:MovieClip;
      
      private var focusPetInfo:PetInfo;
      
      public function PetInfoModule()
      {
         super();
         initUi("petInfoView");
         this._tipMC = UIManager.getMovieClip("ui_SkillTipPanel");
         this._subModules = new SubModuleController(_ui);
         var petEffectIcon:com.robot.module.app.petBag.subModule.petInfo.subModuls.PetEffectIcon = new com.robot.module.app.petBag.subModule.petInfo.subModuls.PetEffectIcon(_ui["effectIcon"]);
         var markAndSkillStone:MarkAndSkillStone = new MarkAndSkillStone(_ui["markAndSkillStone"]);
         var friendIcon:PetFriendIcon = new PetFriendIcon(_ui["friendMc"]);
         this._subModules.addSubModule("effectIcon",petEffectIcon);
         this._subModules.addSubModule("markAndSkillStone",markAndSkillStone);
         this._subModules.addSubModule("friendIcon",friendIcon);
         this.petGroupExtraEffect = new PetGroupExtraEffect();
         _eventCom.addMouseOverEvent(_ui["effect2"],this.onOverHandler);
         _eventCom.addMouseOutEvent(_ui["effect2"],this.onOutHandler);
         _ui.addEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
         this.update();
      }
      
      protected function onWheel(e:MouseEvent) : void
      {
         var scale:Number = Number(_ui["petContainer"].scaleX);
         scale += e.delta / 20;
         if(scale > 1.5)
         {
            scale = 1.5;
         }
         if(scale < 0.5)
         {
            scale = 0.5;
         }
         _ui["petContainer"].scaleX = _ui["petContainer"].scaleY = scale;
      }
      
      override protected function onFocusPetChange() : void
      {
         _ui["petContainer"].scaleX = _ui["petContainer"].scaleY = 1;
         this.update();
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var index1:int = 0;
         var index2:int = 0;
         var btnName:String = String(e.target.name);
         switch(btnName)
         {
            case "followBtn":
               if(FiveColorSnowBallController.getInstance().isFollow())
               {
                  KTool.petFollow(66666);
                  return;
               }
               PetManager.showPet(focusPet.catchTime);
               if(e.target.parent.currentFrame == 2)
               {
                  _ui["followBtn"].gotoAndStop(1);
               }
               break;
            case "storageBtn":
               if(focusPet != null)
               {
                  index1 = this.getPetIndex(moduleData.firstBagInfos,focusPet.catchTime);
                  index2 = this.getPetIndex(moduleData.secondBagInfos,focusPet.catchTime);
                  if(index1 != -1)
                  {
                     if(moduleData.firstBagInfos.length > 1)
                     {
                        moduleData.firstBagInfos.every(function(p:PetInfo, i:int, arr:Array):Boolean
                        {
                           if(p.catchTime != focusPet.catchTime)
                           {
                              focusPetInfo = p;
                              return false;
                           }
                           return true;
                        });
                     }
                     else if(moduleData.secondBagInfos.length > 0)
                     {
                        this.focusPetInfo = moduleData.secondBagInfos[0];
                     }
                  }
                  else if(index2 != -1)
                  {
                     if(moduleData.secondBagInfos.length > 1)
                     {
                        moduleData.secondBagInfos.every(function(p:PetInfo, i:int, arr:Array):Boolean
                        {
                           if(p.catchTime != focusPet.catchTime)
                           {
                              focusPetInfo = p;
                              return false;
                           }
                           return true;
                        });
                     }
                     else if(moduleData.firstBagInfos.length > 0)
                     {
                        this.focusPetInfo = moduleData.firstBagInfos[0];
                     }
                  }
                  PetManager.bagToInStorage(focusPet.catchTime);
                  PetManager.addEventListener(PetEvent.REMOVED,this.onPetRemoved);
               }
               break;
            case "petSkin":
               ModuleManager.showAppModule("PetSkinSelectPanel",focusPet);
               break;
            case "petTypeIcon":
               if(Boolean(focusPet))
               {
                  ModuleManager.showAppModule("SeerBookAttrRelationshipPanel",focusPet.id);
               }
               break;
            case "advBtn":
               ModuleManager.showAppModule("AdvancedPetInfoPanel",focusPet.id);
         }
      }
      
      private function getPetIndex(arr:Array, catchTime:uint) : int
      {
         var result:int = -1;
         for(var i:int = 0; i < arr.length; i++)
         {
            if((arr[i] as PetInfo).catchTime == catchTime)
            {
               return i;
            }
         }
         return result;
      }
      
      private function onPetRemoved(e:PetEvent) : void
      {
         PetManager.removeEventListener(PetEvent.REMOVED,this.onPetRemoved);
         moduleData.focusPet = this.focusPetInfo;
         this.focusPetInfo = null;
      }
      
      private function update() : void
      {
         var btn:SimpleButton;
         var url:String;
         var icon:DisplayObject;
         var i:int;
         var eIcon:com.robot.app.petbag.ui.PetEffectIcon = null;
         var advType:int = 0;
         _ui["effect1"].removeChildren();
         _ui["effect2"].visible = false;
         setPanelEnable(_ui,focusPet != null);
         DisplayUtil.removeAllChild(_ui["con"]);
         if(focusPet == null)
         {
            this.clearInfos();
            return;
         }
         btn = UIManager.getButton("Icon_PetType_" + PetXMLInfo.getType(focusPet.id));
         btn.name = "petTypeIcon";
         _ui["con"].addChild(btn);
         EventManager.dispatchEvent(new DynamicEvent("newseer2020_pet_focus",focusPet));
         _ui["levelTxt"].text = focusPet.level;
         _ui["petName"].text = PetXMLInfo.getName(focusPet.id);
         url = String(ClientConfig.getPetFightPath(focusPet.id,focusPet.catchTime,focusPet.skinId));
         icon = this.getPetIcon(url,0,"down",false,"pet",320 * 0.8,320 * 0.8);
         DisplayUtil.removeAllChild(_ui["petContainer"]);
         _ui["petContainer"].addChild(icon);
         _ui["petSkin"].visible = PetSkinXMLInfo.isPetHaveSkin(focusPet.id);
         this.petGroupExtraEffect.showIcon(focusPet.id,_ui);
         if(Boolean(PetManager.showInfo) && PetManager.showInfo.catchTime == focusPet.catchTime)
         {
            _ui["followBtn"].gotoAndStop(2);
         }
         else
         {
            _ui["followBtn"].gotoAndStop(1);
         }
         for(i = 0; i < 5; i++)
         {
            eIcon = new com.robot.app.petbag.ui.PetEffectIcon();
            eIcon.name = "icon" + i;
            _ui["effect1"].addChild(eIcon);
            eIcon.x = (eIcon.width + 4) * i;
            eIcon.y = 0;
         }
         this.showIcon(focusPet.effectList.filter(function(_petInfo:PetEffectInfo, index:int, array:Array):Boolean
         {
            return _petInfo.status == 2 || _petInfo.status == 3;
         },focusPet.effectList));
         _ui.advBtnMc.visible = PetAdvanceXMLInfo.checkInAdvancedPet(focusPet.id);
         if(Boolean(_ui.advBtnMc.visible))
         {
            advType = int(PetAdvanceXMLInfo.getPetAdvancedType(focusPet.id));
            if(advType == 1)
            {
               _ui.advBtnMc.gotoAndStop(2);
            }
            else
            {
               _ui.advBtnMc.gotoAndStop(1);
            }
         }
      }
      
      private function showIcon(array:Array) : void
      {
         var i:int = 0;
         var petEfInfo:PetEffectInfo = null;
         var temp:int = 0;
         var temp1:int = 0;
         var icon:com.robot.app.petbag.ui.PetEffectIcon = null;
         for(i = 0; i < array.length; i++)
         {
            petEfInfo = array[i];
            temp = [300672,300697,300810].indexOf(petEfInfo.itemId);
            if(temp != -1)
            {
               _ui["effect2"].visible = true;
               this._tipMC["info_txt"].htmlText = "已使用" + "<font color=\'#ffff00\' size=\'14\'> " + ItemXMLInfo.getName(petEfInfo.itemId) + "</font>\r\r" + "效果为：<font color=\'#ffffff\'>" + ["对战时增加精灵所有属性50点，使用次数1次。赛尔间对战无效!","对战时增加精灵所有属性50点，使用次数1次。赛尔间对战无效!","对战时增加精灵所有属性80点，使用次数1次。赛尔间对战无效!"][temp] + "</font>";
               break;
            }
            temp1 = [300884,300885,300886,300887,300888,300889,300904,300905,300906,300907].indexOf(petEfInfo.itemId);
            if(temp1 != -1)
            {
               _ui["effect2"].visible = true;
               this._tipMC["info_txt"].htmlText = this._tipMC["info_txt"].htmlText = "已使用" + "<font color=\'#ffff00\' size=\'14\'> " + ItemXMLInfo.getName(petEfInfo.itemId) + "</font>\r\r" + "效果为：<font color=\'#ffffff\'>" + ItemTipXMLInfo.getItemDes(petEfInfo.itemId) + "</font>";
               break;
            }
         }
         array.splice(i,1);
         for(i = 0; i < 5; i++)
         {
            icon = _ui["effect1"].getChildByName("icon" + i) as PetEffectIcon;
            icon.clear();
            if(i < array.length)
            {
               icon.show(array[i] as PetEffectInfo);
            }
         }
      }
      
      private function onOverHandler(e:MouseEvent) : void
      {
         var mX:Number = Number(this.mouseX);
         var mY:Number = Number(this.mouseY);
         var p:Point = this.localToGlobal(new Point(mX,mY));
         LevelManager.appLevel.addChild(this._tipMC);
         this._tipMC.x = p.x + 15;
         this._tipMC.y = p.y + 15;
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
      }
      
      private function onMoveHandler(e:MouseEvent) : void
      {
         this._tipMC.x = LevelManager.stage.mouseX + 15;
         this._tipMC.y = LevelManager.stage.mouseY + 15;
      }
      
      private function onOutHandler(event:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._tipMC);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
      }
      
      private function clearInfos() : void
      {
         var dis:DisplayObject = null;
         _ui["levelTxt"].text = "";
         _ui["petName"].text = "";
         for(var i:int = 0; i < _ui["petContainer"].numChildren; i++)
         {
            dis = _ui["petContainer"].getChildAt(i);
            DisplayUtil.removeAllChild(dis as DisplayObjectContainer);
         }
         DisplayUtil.removeAllChild(_ui["petContainer"]);
      }
      
      override public function destory() : void
      {
         var icon:com.robot.app.petbag.ui.PetEffectIcon = null;
         this.clearInfos();
         DisplayUtil.removeAllChild(_ui["con"]);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMoveHandler);
         _ui.removeEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
         DisplayUtil.removeForParent(this._tipMC,false);
         this._tipMC = null;
         this.focusPetInfo = null;
         for(var i:int = 0; i < 5; i++)
         {
            icon = _ui["effect1"].getChildByName("icon" + i) as PetEffectIcon;
            if(Boolean(icon))
            {
               icon.clear();
               icon.parent.removeChild(icon);
               icon = null;
            }
         }
         this.petGroupExtraEffect.destroy();
         this.petGroupExtraEffect = null;
         this._subModules.destory();
         this._subModules = null;
         super.destory();
      }
      
      private function getPetIcon(url:String, width:int = 0, direction:String = "down", useBitMap:Boolean = true, name:String = "pet", maxWidth:Number = 0, maxHeight:Number = 0) : DisplayObject
      {
         var result:Sprite = null;
         result = new Sprite();
         ResourceManager.getResource(url,function(mc:DisplayObject):void
         {
            if(!mc)
            {
               return;
            }
            mc.y = -100;
            if(mc.width < 1000)
            {
               while(mc.width > 360)
               {
                  mc.scaleX *= 0.9;
                  mc.scaleY *= 0.9;
               }
            }
            if(Boolean(result))
            {
               result.addChild(mc);
            }
         },name,3,false);
         return result;
      }
   }
}
