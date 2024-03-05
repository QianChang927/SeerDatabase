package com.robot.app.petUpdate.updatePanel
{
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.skillBtn.SkillInfoTip;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class LevelUpAndNewSkillLabel extends EventDispatcher
   {
      
      public static const LABEL_SELECTED:String = "label_selected";
       
      
      private var ui:MovieClip;
      
      private var _id:int;
      
      private var petInfo:PetInfo;
      
      public function LevelUpAndNewSkillLabel(param1:MovieClip)
      {
         super();
         this.ui = param1;
         this.ui.mouseChildren = false;
         this.ui.buttonMode = true;
         this.ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this.ui.addEventListener(MouseEvent.ROLL_OVER,this.overHandler);
         this.ui.addEventListener(MouseEvent.ROLL_OUT,this.outHandler);
      }
      
      private function overHandler(param1:MouseEvent) : void
      {
         if(Boolean(this.petInfo) && Boolean(this.petInfo.skillMark))
         {
            SkillInfoTip.showPetInfoTip(this.petInfo,this.skillID);
         }
         else
         {
            if(this.skillID == 0)
            {
               return;
            }
            SkillInfoTip.show(this.skillID);
         }
      }
      
      private function outHandler(param1:MouseEvent) : void
      {
         SkillInfoTip.hide();
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         this.ui.gotoAndStop(2);
         dispatchEvent(new Event(LABEL_SELECTED));
      }
      
      public function reset() : void
      {
         this.ui.gotoAndStop(1);
      }
      
      public function get skillID() : int
      {
         return this._id;
      }
      
      public function show(param1:PetInfo, param2:int, param3:int = -1) : void
      {
         var _loc4_:String = null;
         var _loc5_:uint = 0;
         var _loc6_:SimpleButton = null;
         this.petInfo = param1;
         this._id = param2;
         if(param2 == 0)
         {
            this.ui.mouseEnabled = false;
            if(this.ui.totalFrames == 3)
            {
               this.ui.gotoAndStop(3);
            }
            else
            {
               this.ui.visible = false;
            }
         }
         else
         {
            this.ui.mouseEnabled = true;
            this.ui.gotoAndStop(1);
            if(this.ui.totalFrames != 3)
            {
               this.ui.visible = true;
               this.ui["newmc"].visible = false;
            }
            this.ui["info"]["nameTxt"].text = SkillXMLInfo.getName(param2);
            this.ui["info"]["migTxt"].text = "威力:" + SkillXMLInfo.getDamage(param2).toString();
            _loc4_ = String(SkillXMLInfo.getPP(param2).toString());
            if(param3 == -1)
            {
               this.ui["info"]["ppTxt"].text = "PP:" + _loc4_ + "/" + _loc4_;
            }
            else
            {
               this.ui["info"]["ppTxt"].text = "PP:" + param3.toString() + "/" + _loc4_;
            }
            _loc5_ = uint(SkillXMLInfo.getTypeID(param2));
            _loc6_ = UIManager.getButton("Icon_PetType_" + _loc5_);
            if(SkillXMLInfo.getCategory(param2) == 4)
            {
               _loc6_ = UIManager.getButton("Icon_PetType_prop");
            }
            if(_loc6_)
            {
               DisplayUtil.removeAllChild(this.ui["info"]["iconMC"]);
               this.ui["info"]["iconMC"].addChild(_loc6_);
            }
         }
      }
      
      public function showNew() : void
      {
         this.ui["newmc"].visible = true;
      }
   }
}
