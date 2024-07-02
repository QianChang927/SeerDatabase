package com.robot.module.app.petBag.subModule.petInfo.subModuls
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.CountermarkType;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.itemTip.CountermarkItemGrid;
   import com.robot.core.utils.CommonUI;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MarkAndSkillStone extends PetBagSubModule
   {
       
      
      private var _grids:Array;
      
      public function MarkAndSkillStone(mainUI:MovieClip)
      {
         this._grids = [];
         _ui = mainUI;
         super();
         this.initIcons();
      }
      
      private function initIcons() : void
      {
         var icons:Array = ["abilityMark","skillMark","commonMark","skillStone"];
         for(var i:int = 0; i < icons.length; i++)
         {
            _ui[icons[i]].mouseChildren = true;
            _ui[icons[i]].buttonMode = true;
            _eventCom.addClickEvent(_ui[icons[i]],this.onClick);
         }
         this.onFocusPetChange();
      }
      
      override protected function onClick(e:MouseEvent) : void
      {
         var btnName:String = String(e.currentTarget.name);
         var obj:* = {};
         obj.info = focusPet;
         switch(btnName)
         {
            case "skillStone":
               ModuleManager.showAppModule("SkillStoneBagPanel",focusPet);
               break;
            case "abilityMark":
               EventManager.dispatchEvent(new Event("abilityMarkHoleClick"));
               obj.type = CountermarkType.HOLE_IS_ABILITY;
               ModuleManager.showAppModule("CountermarkEquipPanel",obj);
               break;
            case "skillMark":
               obj.type = CountermarkType.HOLE_IS_SKILL;
               ModuleManager.showAppModule("CountermarkEquipPanel",obj);
               break;
            case "commonMark":
               if(!focusPet.commonMarkActived)
               {
                  this.openCommonMark();
               }
               else
               {
                  obj.type = CountermarkType.HOLE_IS_COMMON;
                  ModuleManager.showAppModule("CountermarkEquipPanel",obj);
               }
         }
      }
      
      override protected function onFocusPetChange() : void
      {
         CommonUI.setEnabled(_ui["skillStone"],focusPet != null,focusPet == null);
         if(focusPet == null)
         {
            this.clearStoneMc();
            this.destoryGrids();
            return;
         }
         this.updateMarks();
         this.updateSkillStone();
      }
      
      private function clearStoneMc() : void
      {
         var stonMv:MovieClip = _ui["skillStone"];
         DisplayUtil.removeAllChild(stonMv["iconMc"]);
      }
      
      private function updateMarks() : void
      {
         this.destoryGrids();
         if(focusPet == null)
         {
            return;
         }
         this.updateMark(_ui["abilityMark"],focusPet.abilityMark);
         this.updateMark(_ui["skillMark"],focusPet.skillMark);
         this.updateMark(_ui["commonMark"],focusPet.commonMark);
         if(Boolean(focusPet.commonMarkActived))
         {
            _ui["commonMark"]["mc"].gotoAndStop(1);
            _ui["commonMark"]["con"].visible = true;
         }
         else
         {
            _ui["commonMark"]["mc"].gotoAndStop(2);
            _ui["commonMark"]["con"].visible = false;
         }
      }
      
      private function updateMark(markView:MovieClip, itemId:int) : void
      {
         var info:CountermarkInfo = null;
         if(itemId == 0)
         {
            if(markView["mc"]["btn"] != null)
            {
               markView["mc"]["btn"].visible = true;
            }
            return;
         }
         if(markView["mc"]["btn"] != null)
         {
            markView["mc"]["btn"].visible = false;
         }
         if(CountermarkXMLInfo.isUniversalMark(itemId))
         {
            info = ItemManager.getUniversalMarkInfo(itemId);
         }
         else
         {
            info = new CountermarkInfo();
            info.markID = itemId;
         }
         var grid:CountermarkItemGrid = new CountermarkItemGrid(info,markView.con,false);
         grid.show();
         this._grids.push(grid);
      }
      
      private function updateSkillStone() : void
      {
         var skill:PetSkillInfo = null;
         var url:String = null;
         var icon:DisplayObject = null;
         var stonMv:MovieClip = _ui["skillStone"];
         DisplayUtil.removeAllChild(stonMv["iconMc"]);
         for each(skill in focusPet.skillArray)
         {
            if(skill.id > 100000)
            {
               url = String(ItemXMLInfo.getIconURL(SkillXMLInfo.getStoneBySkill(skill.id)));
               icon = KTool.getIcon(url,40);
               stonMv["iconMc"].addChild(icon);
               _toolTipCom.addTip(stonMv,ItemXMLInfo.getName(SkillXMLInfo.getStoneBySkill(skill.id)));
               break;
            }
         }
      }
      
      private function destoryGrids() : void
      {
         for(var i:int = 0; i < this._grids.length; i++)
         {
            (this._grids[i] as CountermarkItemGrid).destroy();
            this._grids[i] = null;
         }
         this._grids = [];
      }
      
      private function openCommonMark() : void
      {
         var petName:String;
         var tips:String = null;
         if(focusPet.level < 100)
         {
            Alarm.show("只有100级精灵才能开启通用刻印孔哦");
            return;
         }
         if(!PetManager.containsBagForCapTime(focusPet.catchTime))
         {
            Alarm.show("请把精灵放入战斗背包中哦！");
            return;
         }
         petName = String(PetXMLInfo.getName(focusPet.id));
         tips = "开启 " + petName + " 身上的通用刻印孔需要消耗1个通用刻印激活水晶，确定要为 " + petName + " 开启通用刻印孔吗？";
         ItemManager.updateItems([300066]).then(function():void
         {
            if(ItemManager.getNumByID(300066) <= 0)
            {
               KTool.buyProductWithPromise(241142).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(CommandID.ACTIVE_COUNTMARK_BY_BUY,[focusPet.catchTime]);
               }).then(function():void
               {
                  Alarm.show("激活成功！");
                  moduleData.updateFocusPetInfo();
               });
            }
            else
            {
               Alert.showWithPromise(tips).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(CommandID.ACTIVE_COUNTERMARK,[focusPet.catchTime]);
               }).then(function():void
               {
                  Alarm.show("激活成功！");
                  moduleData.updateFocusPetInfo();
               });
            }
         });
      }
      
      override public function destory() : void
      {
         this.clearStoneMc();
         this.destoryGrids();
         this._grids = null;
         super.destory();
      }
   }
}
